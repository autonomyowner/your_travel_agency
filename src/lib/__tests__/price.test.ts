import { describe, expect, it } from 'vitest'
import { calculateSubtotal, calculateTotal, calculateDeposit } from '../price'

describe('price calculations', () => {
  it('calculates subtotal with travelers and addons', () => {
    const subtotal = calculateSubtotal({ basePrice: 1000, travelers: 2, addonsTotal: 150 })
    expect(subtotal).toBe(2150)
  })

  it('calculates total with tax', () => {
    const total = calculateTotal({ basePrice: 1000, travelers: 2, addonsTotal: 0, taxRate: 0.1 })
    expect(total).toBe(2200)
  })

  it('calculates deposit as a percentage of total', () => {
    const deposit = calculateDeposit({
      basePrice: 2000,
      travelers: 1,
      addonsTotal: 0,
      taxRate: 0.05,
      depositRate: 0.2,
    })
    expect(deposit).toBe(420)
  })
})
