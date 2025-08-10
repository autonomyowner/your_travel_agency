import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTripBySlug } from '../hooks/useTrips'
import { formatDate, formatMoney } from '../lib/format'

export default function TripDetail() {
  const { slug } = useParams()
  const { data: trip, isLoading } = useTripBySlug(slug)
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null)

  const priceFrom = useMemo(() => {
    if (!trip) return 0
    return trip.priceFrom
  }, [trip])

  if (isLoading) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">Loading…</p>
      </main>
    )
  }

  if (!trip) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">Trip not found.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-[--color-brand-light]"></div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">{trip.title}</h1>
          {trip.subtitle && <p className="mt-2 text-slate-600">{trip.subtitle}</p>}
          <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
            {trip.highlights.map((h) => (
              <li key={h} className="rounded-full bg-slate-100 px-2 py-1">
                {h}
              </li>
            ))}
          </ul>

          {trip.itinerary && trip.itinerary.length > 0 && (
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-slate-900">Itinerary</h2>
              <ol className="mt-2 space-y-2">
                {trip.itinerary.map((d) => (
                  <li key={d.day} className="rounded-md border p-3">
                    <p className="text-sm font-semibold text-slate-900">
                      Day {d.day}: {d.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{d.description}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border p-4">
            <p className="text-sm text-slate-600">From</p>
            <p className="text-2xl font-bold text-slate-900">
              {formatMoney(priceFrom, trip.currency)}
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-slate-700">Availability</p>
              <ul className="space-y-2">
                {(trip.availabilityBlocks ?? []).map((b, idx) => (
                  <li key={idx}>
                    <label className="flex cursor-pointer items-center gap-3 rounded-md border p-2 hover:bg-slate-50">
                      <input
                        type="radio"
                        name="availability"
                        className="h-4 w-4"
                        checked={selectedBlock === idx}
                        onChange={() => setSelectedBlock(idx)}
                      />
                      <span className="text-sm text-slate-700">
                        {formatDate(b.startDate)} → {formatDate(b.endDate)} · {b.availableSpots}{' '}
                        spots
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <Link
                to={`/book?trip=${encodeURIComponent(trip.slug)}${
                  selectedBlock !== null && trip.availabilityBlocks?.[selectedBlock]
                    ? `&date=${encodeURIComponent(trip.availabilityBlocks[selectedBlock]!.startDate)}`
                    : ''
                }`}
                className="inline-flex w-full items-center justify-center rounded-md bg-[--color-brand] px-4 py-2 text-sm font-semibold text-white hover:bg-slate-900"
              >
                Book this trip
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
