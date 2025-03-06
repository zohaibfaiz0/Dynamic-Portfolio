// schemas/education.ts
export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Degree/Certification Title',
      type: 'string',
    },
    {
      name: 'institute',
      title: 'Institute Name',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'E.g., Currently Enrolled, Graduated, Ongoing, etc.',
      options: {
        list: [
          {title: 'Currently Enrolled', value: 'Currently Enrolled'},
          {title: 'Ongoing', value: 'Ongoing'},
          {title: 'Graduated', value: 'Graduated'},
          {title: 'Completed', value: 'Completed'},
          {title: 'Certified', value: 'Certified'},
          {title: 'Dropped', value: 'Dropped'}
        ],
      }
    },
    {
      name: 'details',
      title: 'Additional Details',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number appears first'
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}