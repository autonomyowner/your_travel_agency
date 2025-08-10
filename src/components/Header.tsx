import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-block h-2 w-2 rounded-full bg-[--color-brand]"></span>
          your_agency_name
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                  }`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trips"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                  }`
                }
              >
                Trips
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book"
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-brand] ${
                    isActive ? 'bg-slate-900' : 'bg-[--color-brand] hover:bg-slate-900'
                  }`
                }
              >
                Book a trip
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
