import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const BASE_LOCALES = ['en', 'fr']

function normalizeLocale(locale: string): string {
    console.log('initial locale:', locale)
    const base = locale.split('-')[0]
    return BASE_LOCALES.includes(base) ? base : 'en'
}

export default function middleware(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language') || ''
    const firstAccepted = acceptLanguage.split(',')[0] || ''
    const normalized = normalizeLocale(firstAccepted)

    const handleI18nRouting = createMiddleware({
        locales: BASE_LOCALES,
        defaultLocale: normalized,
        localePrefix: 'always', // or 'as-needed', depending on your setup
    })

    const response = handleI18nRouting(request)
    response.headers.set('x-resolved-locale', normalized) // optional debug info

    return response
}

export const config = {
    matcher: ['/', '/(en|fr)/:path*'],
}
