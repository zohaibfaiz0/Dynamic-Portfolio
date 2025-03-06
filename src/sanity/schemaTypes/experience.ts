
  // schemas/experience.ts
  export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'details',
        title: 'Experience Details',
        type: 'array',
        of: [{ type: 'string' }]
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