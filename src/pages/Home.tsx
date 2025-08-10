import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Section from '../components/Section'

export default function Home() {
  const navigate = useNavigate()
  const [destination, setDestination] = useState('')
  const [travelers, setTravelers] = useState(2)

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (destination) params.set('destination', destination)
    if (travelers) params.set('travelers', String(travelers))
    navigate(`/trips?${params.toString()}`)
  }

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Discover curated journeys crafted by experts
            </h1>
            <p className="mt-4 text-pretty text-slate-600">
              your_agency_name brings you boutique experiences with effortless booking.
            </p>
            <form onSubmit={handleSearchSubmit} className="mt-8 flex flex-wrap items-end gap-3">
              <label className="flex flex-col">
                <span className="text-xs font-semibold text-slate-600">Destination</span>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g., Amalfi, Japan, Safari"
                  className="mt-1 w-64 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[--color-brand] focus:outline-none focus:ring-2 focus:ring-[--color-brand]/20"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-xs font-semibold text-slate-600">Travelers</span>
                <input
                  type="number"
                  min={1}
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="mt-1 w-28 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[--color-brand] focus:outline-none focus:ring-2 focus:ring-[--color-brand]/20"
                />
              </label>
              <button
                type="submit"
                className="rounded-md bg-[--color-brand] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-brand]"
              >
                Search trips
              </button>
            </form>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[--color-brand]">
            <div className="absolute inset-0 grid grid-cols-6 opacity-10">
              <div className="border-r border-white/30"></div>
              <div className="border-r border-white/30"></div>
              <div className="border-r border-white/30"></div>
              <div className="border-r border-white/30"></div>
              <div className="border-r border-white/30"></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <Section title="Featured trips" subtitle="Curated experiences our travelers love.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-xl border">
              <div className="aspect-video bg-[--color-brand-light]"></div>
              <div className="p-4">
                <div className="h-5 w-2/3 rounded bg-slate-200"></div>
                <div className="mt-2 h-4 w-1/2 rounded bg-slate-100"></div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
