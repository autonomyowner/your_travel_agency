import { useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useTrips } from '../hooks/useTrips'

export default function Trips() {
  const { search } = useLocation()
  const params = useMemo(() => new URLSearchParams(search), [search])
  const destinationParam = params.get('destination')?.toLowerCase()

  const { data: trips = [], isLoading } = useTrips()
  const results = useMemo(() => {
    if (!destinationParam) return trips
    return trips.filter((t) =>
      t.destination.some((d) => d.toLowerCase().includes(destinationParam)),
    )
  }, [destinationParam, trips])

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-baseline justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Trips</h1>
        <p className="text-sm text-slate-500">
          {isLoading ? 'Loading…' : `${results.length} results`}
        </p>
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
