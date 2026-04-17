import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pressRelease',
  title: 'Press Release / Update',
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
      title: 'Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'external_link',
      title: 'External Source Link (Optional)',
      type: 'url',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Official Note', value: 'official'},
          {title: 'Advisory', value: 'advisory'},
          {title: 'Statement', value: 'statement'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
