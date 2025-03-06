// lib/sanityClient.ts
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// types/sanity-types.ts
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';
import * as IconsCpp from 'react-icons/tb';
import * as IconsSi from 'react-icons/si';

export interface PersonalInfo {
  name: string;
  age: number;
  phone: string;
  email: string;
  occupation: string;
  location: string;
}

export interface Education {
  _id: string;
  title: string;
  institute: string;
  status: string;
  details: string;
  statusColor: string;
}

export interface Experience {
  _id: string;
  title: string;
  details: string[];
}

export interface Skill {
  _id: string;
  name: string;
  icon: string;
}

export function getSkillIcon(iconName: string): IconType {
  const iconMap: { [key: string]: IconType } = {
    ...Icons,
    ...IconsCpp,
    ...IconsSi
  };

  return iconMap[iconName] || Icons.FaCode;
}