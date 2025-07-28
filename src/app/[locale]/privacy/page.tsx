'use client'

import { Button } from '@/components/ui/buttons/button'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function Page() {
    const t = useTranslations()
    const router = useRouter()

    return (
        <div className="w-full h-screen portrait:min-h-[100dvh] md:flex items-center justify-center p-5 overflow-auto">
            <main className="w-full max-w-[450px] h-auto bg-off-white rounded-lg p-5">
                <h1 className="text-2xl font-semibold tracking-tight mb-8">{t('privacy.title')}</h1>

                <p className="mb-4">{t('privacy.p1')}</p>
                <p>{t('privacy.p2')}</p>

                <p className="mb-4">
                    {t('privacy.p3')}{' '}
                    <a
                        href="https://cal.com/privacy"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        cal.com/privacy
                    </a>
                </p>

                <p className="py-4">
                    {t('privacy.p4')}
                    <br />
                    <strong className="block pt-4">Étienne Courchesne</strong>
                    <a href="mailto:etienne@troiscent.ca">etienne@troiscent.ca</a>
                </p>

                <p className="text-xs text-gray-500 mb-8">{t('privacy.updated')}</p>

                <Button variant="black" text={t('kw.close')} onClick={() => router.push('/')} />
            </main>
        </div>
    )
}
