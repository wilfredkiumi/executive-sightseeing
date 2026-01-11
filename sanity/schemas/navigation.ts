import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'mainMenu',
      title: 'Main Menu',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Menu Title', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' },
          { name: 'isExternal', title: 'External Link', type: 'boolean', initialValue: false },
          {
            name: 'subMenu',
            title: 'Sub Menu',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'title', title: 'Sub Menu Title', type: 'string' },
                { name: 'url', title: 'URL', type: 'string' },
                { name: 'isExternal', title: 'External Link', type: 'boolean', initialValue: false }
              ]
            }]
          }
        ]
      }]
    }),
    defineField({
      name: 'footerMenu',
      title: 'Footer Menu',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Menu Title', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' },
          { name: 'isExternal', title: 'External Link', type: 'boolean', initialValue: false }
        ]
      }]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Navigation'
      };
    }
  }
});