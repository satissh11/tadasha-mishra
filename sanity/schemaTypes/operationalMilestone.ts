import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'operationalMilestone',
  title: 'Service Milestone',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date / Year',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Operational Milestone', value: 'operations'},
          {title: 'Infrastructure & System', value: 'infrastructure'},
          {title: 'Award / Recognition', value: 'award'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
