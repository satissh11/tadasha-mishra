import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'One-line factual description',
      validation: (rule) => rule.max(100),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Official Events', value: 'official_events'},
          {title: 'Field Visits', value: 'field_visits'},
          {title: 'Public Engagements', value: 'public_engagements'},
          {title: 'Conferences / Training', value: 'conferences_training'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
