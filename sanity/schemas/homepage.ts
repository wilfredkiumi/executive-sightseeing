import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Main Title', type: 'string', validation: Rule => Rule.required() },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 4 },
        { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
        {
          name: 'ctaButtons',
          title: 'Call-to-Action Buttons',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'text', title: 'Button Text', type: 'string' },
              { name: 'url', title: 'URL', type: 'string' },
              { name: 'style', title: 'Button Style', type: 'string', options: { list: ['primary', 'secondary', 'ghost'] } },
              { name: 'isExternal', title: 'External Link', type: 'boolean', initialValue: false }
            ]
          }]
        }
      ]
    }),
    defineField({
      name: 'featuredServices',
      title: 'Featured Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      validation: Rule => Rule.max(6)
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Section Description', type: 'text' },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Feature Title', type: 'string' },
              { name: 'description', title: 'Feature Description', type: 'text' },
              { name: 'icon', title: 'Icon Name', type: 'string' }
            ]
          }]
        }
      ]
    }),
    defineField({
      name: 'testimonials',
      title: 'Customer Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Customer Name', type: 'string' },
          { name: 'title', title: 'Job Title', type: 'string' },
          { name: 'company', title: 'Company', type: 'string' },
          { name: 'testimonial', title: 'Testimonial', type: 'text' },
          { name: 'rating', title: 'Rating (1-5)', type: 'number', validation: Rule => Rule.min(1).max(5) },
          { name: 'image', title: 'Customer Photo', type: 'image', options: { hotspot: true } }
        ]
      }]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'title', title: 'SEO Title', type: 'string' },
        { name: 'description', title: 'SEO Description', type: 'text', rows: 3 },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
        { name: 'ogImage', title: 'Social Media Image', type: 'image' }
      ]
    })
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage'
    }
  }
});