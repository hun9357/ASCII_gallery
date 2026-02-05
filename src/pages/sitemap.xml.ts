import type { APIRoute } from 'astro';
import asciiArts from '../data/ascii-arts.json';
import categories from '../data/categories.json';

const siteUrl = 'https://steady-tiramisu-8e81fc.netlify.app';

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.5', changefreq: 'monthly' },
  ];

  const categoryPages = categories.categories.map((cat) => ({
    url: `/category/${cat.slug}`,
    priority: '0.8',
    changefreq: 'weekly',
  }));

  const artPages = asciiArts.arts.map((art) => ({
    url: `/art/${art.id}`,
    priority: '0.6',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...categoryPages, ...artPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
