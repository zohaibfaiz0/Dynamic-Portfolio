// schemas/personalInfo.ts
export default {
    name: 'personalInfo',
    title: 'Personal Information',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'age',
        title: 'Age',
        type: 'number',
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'occupation',
        title: 'Occupation',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      }
    ]
  }
  