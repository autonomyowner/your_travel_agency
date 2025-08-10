export function formatMoney(value: number, currency = 'USD', locale = 'en-US'): string {
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value)
  } catch {
    return `$${value.toFixed(2)}`
  }
}

export function formatDate(iso: string, locale = 'en-US'): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })
}
