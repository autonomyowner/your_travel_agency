export type AvailabilityBlock = {
  startDate: string
  endDate: string
  availableSpots: number
  priceOverride?: number
}

export type Trip = {
  id: string
  slug: string
  title: string
  subtitle?: string
  destination: string[]
  durationDays: number
  priceFrom: number
  currency: string
  rating?: number
  heroImage?: string
  gallery?: string[]
  highlights: string[]
  itinerary?: Array<{ day: number; title: string; description: string }>
  inclusions?: string[]
  exclusions?: string[]
  categoryTags?: string[]
  activityLevel?: 'easy' | 'moderate' | 'challenging'
  isPrivate?: boolean
  availabilityBlocks?: AvailabilityBlock[]
  mapCoordinates?: { lat: number; lng: number }
  faq?: Array<{ q: string; a: string }>
}

export type Traveler = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  country?: string
  passportNo?: string
  birthDate?: string
}

export type AddOn = {
  id: string
  name: string
  description?: string
  price: number
  currency: string
}

export type Booking = {
  id: string
  tripId: string
  startDate: string
  travelers: Traveler[]
  addons?: AddOn[]
  totalPrice: number
  currency: string
  status: 'pending' | 'paid' | 'cancelled'
  paymentIntentId?: string
}
