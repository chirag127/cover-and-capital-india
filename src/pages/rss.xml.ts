import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const siteUrl = 'https://chirag127.github.io/cover-and-capital-india';

  const itemsXml = articles
    .map(
      (a) => `
    <item>
      <title><![CDATA[${a.data.title}]]></title>
      <link>${siteUrl}/articles/${a.id}/</link>
      <guid>${siteUrl}/articles/${a.id}/</guid>
      <description><![CDATA[${a.data.description}]]></description>
      <pubDate>${new Date(a.data.publishedAt).toUTCString()}</pubDate>
      <category>${a.data.category}</category>
      <author>chirag@oriz.in (Chirag Singhal)</author>
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Cover &amp; Capital India</title>
    <link>${siteUrl}/</link>
    <description>An independent, research-first guide to life insurance, financial protection, taxation, and wealth building in India.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
