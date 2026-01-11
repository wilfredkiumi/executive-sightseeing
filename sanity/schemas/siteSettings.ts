import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO Settings',
      type: 'object',
      fields: [
        { name: 'title', title: 'Default SEO Title', type: 'string' },
        { name: 'description', title: 'Default SEO Description', type: 'text', rows: 3 },
        { name: 'keywords', title: 'Default Keywords', type: 'array', of: [{ type: 'string' }] },
        { name: 'ogImage', title: 'Default Social Media Image', type: 'image' }
      ]
    }),
    defineField({
      name: 'analytics',
      title: 'Analytics',
      type: 'object',
      fields: [
        { name: 'googleAnalyticsId', title: 'Google Analytics ID', type: 'string' },
        { name: 'facebookPixelId', title: 'Facebook Pixel ID', type: 'string' }
      ]
    }),
    defineField({
      name: 'integrations',
      title: 'Third-party Integrations',
      type: 'object',
      fields: [
        { name: 'stripePublishableKey', title: 'Stripe Publishable Key', type: 'string' },
        { name: 'googleMapsApiKey', title: 'Google Maps API Key', type: 'string' }
      ]
    })
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'siteDescription'
    }
  }
});