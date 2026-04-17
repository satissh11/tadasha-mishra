import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'externalCoverage',
  title: 'External Coverage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publication',
      title: 'Publication Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'URL Link',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Maximum 2 lines of summary.',
      validation: (rule) => rule.max(150),
    }),
  ],
})
