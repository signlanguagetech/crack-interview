/**
 * SEO and Open Graph configuration utilities for Astro
 */

/**
 * Generates the meta tags for SEO and Open Graph
 * @param {Object} options Configuration options
 * @param {string} options.siteUrl Base URL of the site
 * @param {string} options.title Site title (defaults to "Sign Tech Interview")
 * @param {string} options.description Site description
 * @param {string} options.imagePath Path to the image (defaults to "/logo.png")
 * @param {string} options.pageUrl Full URL for the current page (defaults to siteUrl)
 * @returns {Array} Array of meta tag configurations for Astro
 */
function generateMetaTags({
  siteUrl,
  title = "Sign Tech Interview",
  description = '',
  imagePath = "/logo.png",
  pageUrl = ''
}) {
  // Use default description if not provided
  const metaDescription = description || 'A comprehensive platform for technical interview preparation, with special focus on accessibility for deaf and hard of hearing individuals. Learn Angular, Flutter, and Node.js interview strategies.';

  // Use page-specific URL if provided, otherwise use site URL
  const currentUrl = pageUrl || siteUrl;

  // Ensure image path has the correct format
  const imageUrl = imagePath.startsWith('http')
    ? imagePath
    : `${siteUrl}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;

  return [
    // Basic SEO
    {
      tag: 'meta',
      attrs: {
        name: 'description',
        content: metaDescription
      }
    },
    // Open Graph tags
    {
      tag: 'meta',
      attrs: {
        property: 'og:title',
        content: title
      }
    },
    {
      tag: 'meta',
      attrs: {
        property: 'og:description',
        content: metaDescription
      }
    },
    {
      tag: 'meta',
      attrs: {
        property: 'og:type',
        content: 'website'
      }
    },
    {
      tag: 'meta',
      attrs: {
        property: 'og:url',
        content: currentUrl
      }
    },
    {
      tag: 'meta',
      attrs: {
        property: 'og:image',
        content: imageUrl
      }
    },
    {
      tag: 'meta',
      attrs: {
        property: 'og:site_name',
        content: title
      }
    },
    {
      tag: 'meta',
      attrs: {
        property: 'og:logo',
        content: imageUrl
      }
    }
  ];
}

/**
 * Generates analytics script tags
 * @returns {Array} Array of script tag configurations for Astro
 */
function generateAnalyticsTags() {
  return [
    {
      tag: 'script',
      attrs: {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-EM5400YMC3',
        async: true,
      }
    },
    {
      tag: 'script',
      content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-EM5400YMC3');
      `
    }
  ];
}

export {
  generateMetaTags,
  generateAnalyticsTags
};
