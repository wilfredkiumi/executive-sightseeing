import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
      validation: Rule => Rule.required().min(30)
    }),
    defineField({
      name: 'basePrice',
      title: 'Base Price (GBP)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'maxPassengers',
      title: 'Maximum Passengers',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(8)
    }),
    defineField({
      name: 'inclusions',
      title: 'What\'s Included',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'highlights',
      title: 'Tour Highlights',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'route',
      title: 'Tour Route',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Location Name', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'coordinates', title: 'Coordinates [lng, lat]', type: 'array', of: [{ type: 'number' }] },
          { name: 'estimatedDuration', title: 'Estimated Duration (minutes)', type: 'number' },
          { name: 'isOptional', title: 'Optional Stop', type: 'boolean', initialValue: false }
        ]
      }]
    }),
    defineField({
      name: 'images',
      title: 'Service Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0
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
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'shortDescription',
      media: 'images.0'
    }
  }
});