export function setSearchParams(params: Record<string, unknown>): string {
  const usp = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return
    usp.set(key, String(value))
  })
  const s = usp.toString()
  return s.length ? `?${s}` : ''
}

export function getParam(search: string, key: string): string | undefined {
  const usp = new URLSearchParams(search)
  const v = usp.get(key)
  return v ?? undefined
}
