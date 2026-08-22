import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['GPTBot', 'Google-Extended', 'ChatGPT-User', 'ClaudeBot'], allow: '/' }
    ],
    sitemap: 'https://juleativeart.com/sitemap.xml',
  }
}