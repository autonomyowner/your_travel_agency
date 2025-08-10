export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} your_agency_name</p>
          <nav aria-label="Footer">
            <ul className="flex items-center gap-6 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
