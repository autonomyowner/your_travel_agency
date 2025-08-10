type AnalyticsEvent =
  | 'view_home'
  | 'search_submit'
  | 'filter_apply'
  | 'trip_card_click'
  | 'view_trip_detail'
  | 'start_booking'
  | 'booking_step_view'
  | 'booking_payment_submit'
  | 'booking_complete'
  | 'lead_submit'

type AnalyticsPayload = Record<string, unknown>

export function track(event: AnalyticsEvent, payload: AnalyticsPayload = {}): void {
  // Consent gate placeholder; update when cookie consent is added
  const consentGranted = true
  if (!consentGranted) return

  // GA4 / Plausible stubs
  try {
    // Plausible
    // @ts-expect-error plausible may not be typed
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      // @ts-expect-error plausible call
      window.plausible(event, { props: payload })
    }
  } catch {
    void 0
  }

  try {
    // dataLayer for GA4
    // @ts-expect-error dataLayer is dynamic
    window.dataLayer = window.dataLayer || []
    // @ts-expect-error dataLayer push
    window.dataLayer.push({ event, ...payload })
  } catch {
    void 0
  }

  if (import.meta.env.DEV) {
    // debug log for development only
    console.debug('[analytics]', event, payload)
  }
}
