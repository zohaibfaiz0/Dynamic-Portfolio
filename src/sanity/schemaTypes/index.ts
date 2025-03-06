import { type SchemaTypeDefinition } from 'sanity'
import { projectSchema } from './project'
import about from './about'
import experience from './experience'
import skills from './skills'
import education from './education'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, about, experience, skills, education],
}
