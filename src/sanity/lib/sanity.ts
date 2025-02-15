// sanity/sanity.ts
import { createClient } from '@sanity/client'
import { Project } from '@/sanity/schemaTypes/project'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
})

// Query function with TypeScript return type
export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(`
    *[_type == "project"] | order(num asc) {
      _id,
      _createdAt,
      num,
      category,
      title,
      desc,
      stack,
      live,
      github
    }
  `)
}