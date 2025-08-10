import type { Trip } from '../types/domain'
import { TripSchema } from '../schemas'

export async function fetchTrips(): Promise<Trip[]> {
  const res = await fetch('/data/trips.json')
  if (!res.ok) throw new Error('Failed to load trips')
  const data = (await res.json()) as unknown
  const trips = TripSchema.array().parse(data)
  return trips
}

export async function fetchTripBySlug(slug: string): Promise<Trip | undefined> {
  const all = await fetchTrips()
  return all.find((t) => t.slug === slug)
}
