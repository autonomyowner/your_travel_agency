type Props = {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {(title || subtitle) && (
        <header className="mb-6 max-w-2xl">
          {title && <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>}
          {subtitle && <p className="mt-2 text-sm text-slate-600">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  )
}
