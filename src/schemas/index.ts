import { z } from 'zod'

export const AvailabilityBlockSchema = z.object({
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  availableSpots: z.number().int().nonnegative(),
  priceOverride: z.number().positive().optional(),
})

export const TripSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  destination: z.array(z.string().min(1)),
  durationDays: z.number().int().positive(),
  priceFrom: z.number().nonnegative(),
  currency: z.string().min(1),
  rating: z.number().min(0).max(5).optional(),
  heroImage: z.string().url().optional(),
  gallery: z.array(z.string().url()).optional(),
  highlights: z.array(z.string().min(1)),
  itinerary: z
    .array(
      z.object({ day: z.number().int().positive(), title: z.string(), description: z.string() }),
    )
    .optional(),
  inclusions: z.array(z.string()).optional(),
  exclusions: z.array(z.string()).optional(),
  categoryTags: z.array(z.string()).optional(),
  activityLevel: z.enum(['easy', 'moderate', 'challenging']).optional(),
  isPrivate: z.boolean().optional(),
  availabilityBlocks: z.array(AvailabilityBlockSchema).optional(),
  mapCoordinates: z.object({ lat: z.number(), lng: z.number() }).optional(),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
})

export type TripInput = z.infer<typeof TripSchema>
