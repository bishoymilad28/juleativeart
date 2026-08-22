import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://juleativeart.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://juleativeart.com/privacy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://juleativeart.com/terms', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://juleativeart.com/delivery', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}