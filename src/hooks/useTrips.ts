import { useQuery } from '@tanstack/react-query'
import { fetchTripBySlug, fetchTrips } from '../api/trips'

export function useTrips() {
  return useQuery({ queryKey: ['trips'], queryFn: fetchTrips })
}

export function useTripBySlug(slug?: string) {
  return useQuery({
    queryKey: ['trip', slug],
    queryFn: () => (slug ? fetchTripBySlug(slug) : Promise.resolve(undefined)),
    enabled: !!slug,
  })
}
