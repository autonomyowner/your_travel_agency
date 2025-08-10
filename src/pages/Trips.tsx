import { useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'

type Trip = {
  id: string
  slug: string
  title: string
  destination: string[]
  durationDays: number
  priceFrom: number
  rating: number
  highlights: string[]
}

const SEED_TRIPS: Trip[] = [
  {
    id: 'trip_italy_coast_7d',
    slug: 'amalfi-coast-retreat-7d',
    title: 'Amalfi Coast Retreat',
    destination: ['Italy', 'Amalfi'],
    durationDays: 7,
    priceFrom: 2890,
    rating: 4.8,
    highlights: ['Private boat to Capri', 'Cliffside boutique hotel'],
  },
  {
    id: 'trip_kyoto_5d',
    slug: 'kyoto-temples-and-tea-5d',
    title: 'Kyoto Temples & Tea',
    destination: ['Japan', 'Kyoto'],
    durationDays: 5,
    priceFrom: 1990,
    rating: 4.7,
    highlights: ['Tea ceremony', 'Fushimi Inari sunrise'],
  },
]

export default function Trips() {
  const { search } = useLocation()
  const params = useMemo(() => new URLSearchParams(search), [search])
  const destinationParam = params.get('destination')?.toLowerCase()

  const results = useMemo(() => {
    if (!destinationParam) return SEED_TRIPS
    return SEED_TRIPS.filter((t) =>
      t.destination.some((d) => d.toLowerCase().includes(destinationParam)),
    )
  }, [destinationParam])

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-baseline justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Trips</h1>
        <p className="text-sm text-slate-500">{results.length} results</p>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((t) => (
          <li key={t.id} className="overflow-hidden rounded-xl border">
            <div className="aspect-video bg-[--color-brand-light]"></div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-slate-900">{t.title}</h2>
              <p className="mt-1 text-sm text-slate-600">
                {t.durationDays} days · From ${t.priceFrom}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                {t.highlights.map((h) => (
                  <li key={h} className="rounded-full bg-slate-100 px-2 py-1">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link
                  to={`/book?trip=${t.slug}`}
                  className="inline-flex items-center rounded-md bg-[--color-brand] px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-900"
                >
                  Book
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
