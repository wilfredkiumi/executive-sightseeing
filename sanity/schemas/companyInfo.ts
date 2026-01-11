import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Company Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'email' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'text' },
        { name: 'emergencyContact', title: 'Emergency Contact', type: 'string' }
      ]
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' }
      ]
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        { name: 'operatingHours', title: 'Operating Hours', type: 'string' },
        { name: 'timezone', title: 'Timezone', type: 'string', initialValue: 'Europe/London' },
        { name: 'holidays', title: 'Holiday Schedule', type: 'text' }
      ]
    }),
    defineField({
      name: 'locations',
      title: 'Service Locations',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Location Name', type: 'string' },
          { name: 'address', title: 'Address', type: 'text' },
          { name: 'coordinates', title: 'Coordinates [lng, lat]', type: 'array', of: [{ type: 'number' }] },
          { name: 'isPrimary', title: 'Primary Location', type: 'boolean', initialValue: false }
        ]
      }]
    })
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'tagline',
      media: 'logo'
    }
  }
});