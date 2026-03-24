import { useEffect, useState } from 'react';

function parseLegacyPage(markup) {
  const parser = new DOMParser();
  const documentFragment = parser.parseFromString(markup, 'text/html');

  documentFragment.querySelectorAll('script').forEach((element) => element.remove());
  documentFragment.querySelectorAll('.nd').forEach((button, index) => {
    button.dataset.target = `s${index + 1}`;
    button.removeAttribute('onclick');
    button.setAttribute('aria-label', `Go to section ${index + 1}`);
  });

  return {
    bodyHtml: documentFragment.body.innerHTML,
    lang: documentFragment.documentElement.lang || 'en',
    styleText: Array.from(documentFragment.head.querySelectorAll('style'))
      .map((element) => element.textContent ?? '')
      .join('\n'),
    stylesheetHrefs: Array.from(documentFragment.head.querySelectorAll('link[rel="stylesheet"]'))
      .map((element) => element.getAttribute('href'))
      .filter(Boolean),
    title: documentFragment.title,
  };
}

export default function LegacyProposalPage() {
  const [parsedPage, setParsedPage] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function loadLegacyPage() {
      const response = await fetch('/legacy-page.html');

      if (!response.ok) {
        throw new Error(`Failed to load legacy page: ${response.status}`);
      }

      const markup = await response.text();

      if (!isCancelled) {
        setParsedPage(parseLegacyPage(markup));
      }
    }

    loadLegacyPage().catch((error) => {
      console.error(error);
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!parsedPage) {
      return undefined;
    }

    document.documentElement.lang = parsedPage.lang;
    document.title = parsedPage.title;

    let styleElement = document.head.querySelector('style[data-legacy-page="true"]');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.dataset.legacyPage = 'true';
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = parsedPage.styleText;

    const appendedLinks = parsedPage.stylesheetHrefs
      .filter((href) => !document.head.querySelector(`link[href="${CSS.escape(href)}"]`))
      .map((href) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.dataset.legacyHref = href;
        document.head.appendChild(link);
        return link;
      });

    return () => {
      appendedLinks.forEach((link) => link.remove());
    };
  }, [parsedPage]);

  useEffect(() => {
    if (!parsedPage) {
      return undefined;
    }

    const navButtons = Array.from(document.querySelectorAll('.nd'));
    const slides = Array.from(document.querySelectorAll('.slide[id]'));

    const updateActiveNav = (targetId) => {
      navButtons.forEach((button) => {
        button.classList.toggle('on', button.dataset.target === targetId);
      });
    };

    const buttonHandlers = navButtons.map((button) => {
      const handler = () => {
        const targetId = button.dataset.target;
        const target = targetId ? document.getElementById(targetId) : null;

        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          updateActiveNav(targetId);
        }
      };

      button.addEventListener('click', handler);
      return { button, handler };
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry) {
          updateActiveNav(visibleEntry.target.id);
        }
      },
      { threshold: [0.4, 0.6, 0.8] },
    );

    slides.forEach((slide) => observer.observe(slide));

    if (slides[0]) {
      updateActiveNav(slides[0].id);
    }

    return () => {
      observer.disconnect();
      buttonHandlers.forEach(({ button, handler }) => button.removeEventListener('click', handler));
    };
  }, [parsedPage]);

  if (!parsedPage) {
    return <div className="route-loading">Loading proposal...</div>;
  }

  return <div className="legacy-page" dangerouslySetInnerHTML={{ __html: parsedPage.bodyHtml }} />;
}