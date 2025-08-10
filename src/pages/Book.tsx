import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Book() {
  const { search } = useLocation()
  const params = useMemo(() => new URLSearchParams(search), [search])
  const trip = params.get('trip') ?? ''
  const prefillDate = params.get('date') ?? ''

  const [date, setDate] = useState(prefillDate)
  const [travelers, setTravelers] = useState(2)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert(`Booking started for ${trip || 'selected trip'} on ${date} for ${travelers} travelers`)
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">Book a Trip</h1>
      <p className="mt-2 text-sm text-slate-600">
        {trip ? `Trip: ${trip}` : 'Select a trip from the Trips page to prefill details.'}
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Start date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[--color-brand] focus:outline-none focus:ring-2 focus:ring-[--color-brand]/20"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Travelers</span>
          <input
            type="number"
            min={1}
            value={travelers}
            onChange={(e) => setTravelers(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[--color-brand] focus:outline-none focus:ring-2 focus:ring-[--color-brand]/20"
          />
        </label>
        <button
          type="submit"
          className="rounded-md bg-[--color-brand] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-brand]"
        >
          Continue
        </button>
      </form>
    </main>
  )
}
