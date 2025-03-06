
  // schemas/skill.ts
  export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Skill Name',
        type: 'string',
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'string',
        description: 'React Icon component name (e.g., "FaReact")'
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