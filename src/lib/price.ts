export type PriceInput = {
  basePrice: number
  travelers: number
  addonsTotal?: number
  taxRate?: number // e.g., 0.07 for 7%
  depositRate?: number // e.g., 0.2 for 20%
}

export function calculateSubtotal({ basePrice, travelers, addonsTotal = 0 }: PriceInput): number {
  const trip = basePrice * Math.max(travelers, 1)
  return Math.max(trip + addonsTotal, 0)
}

export function calculateTotal({
  basePrice,
  travelers,
  addonsTotal = 0,
  taxRate = 0,
}: PriceInput): number {
  const subtotal = calculateSubtotal({ basePrice, travelers, addonsTotal })
  const tax = subtotal * Math.max(taxRate, 0)
  return Math.round((subtotal + tax) * 100) / 100
}

export function calculateDeposit({
  basePrice,
  travelers,
  addonsTotal = 0,
  taxRate = 0,
  depositRate = 0,
}: PriceInput): number {
  const total = calculateTotal({ basePrice, travelers, addonsTotal, taxRate })
  return Math.round(total * Math.max(Math.min(depositRate, 1), 0) * 100) / 100
}
