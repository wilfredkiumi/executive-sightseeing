import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'review',
  title: 'Customer Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'customerTitle',
      title: 'Job Title',
      type: 'string'
    }),
    defineField({
      name: 'customerCompany',
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    }),
    defineField({
      name: 'title',
      title: 'Review Title',
      type: 'string'
    }),
    defineField({
      name: 'review',
      title: 'Review Text',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'serviceReviewed',
      title: 'Service Reviewed',
      type: 'reference',
      to: [{ type: 'service' }]
    }),
    defineField({
      name: 'isVerified',
      title: 'Verified Review',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'createdAt',
      title: 'Review Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'review',
      rating: 'rating'
    },
    prepare({ title, subtitle, rating }) {
      return {
        title: `${title} (${rating}★)`,
        subtitle: subtitle?.substring(0, 100) + '...'
      };
    }
  }
});