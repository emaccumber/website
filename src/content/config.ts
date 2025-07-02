import { z, defineCollection } from 'astro:content';

const photosCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    photos: z.array(z.object({
      id: z.number(),
      src: z.string(),
      caption: z.string(),
      description: z.string().optional(),
    }))
  })
});

const filmsCollection = defineCollection({
  type: 'data',
  schema: z.union([
    // Regular Vimeo films
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      director: z.string().optional(),
      filmmaker: z.string().optional(),
      year: z.string().optional(),
      date: z.string().optional(),
      vimeoId: z.string(),
      description: z.string().optional(),
    }),
    // Moving image albums with clips
    z.object({
      title: z.string(),
      date: z.string().optional(),
      description: z.string().optional(),
      type: z.literal('moving-image-album'),
      clips: z.array(z.object({
        id: z.number(),
        src: z.string(),
        caption: z.string(),
        description: z.string().optional(),
      }))
    })
  ])
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
    description: z.string().optional(),
  })
});

export const collections = {
  'photos': photosCollection,
  'films': filmsCollection,
  'posts': postsCollection,
};