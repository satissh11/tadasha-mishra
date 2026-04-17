import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'biographyTimeline',
  title: 'Biography Timeline',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year Range',
      type: 'string',
      description: 'e.g. 2014 - 2016',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'posting',
      title: 'Posting / Designation',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role Summary',
      type: 'text',
    }),
  ],
})
