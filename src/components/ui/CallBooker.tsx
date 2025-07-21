import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { Button } from './buttons/button'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

type CallBookerProps = {
    triggerClassname?: string
}

export default function CallBooker({ triggerClassname }: CallBookerProps) {
    const t = useTranslations()

    useEffect(() => {
        ;(async function () {
            const cal = await getCalApi({ namespace: 'discovery-call' })
            cal('ui', {
                cssVarsPerTheme: { light: { 'cal-brand': '#111111' }, dark: { 'cal-brand': '#ededed' } },
                hideEventTypeDetails: false,
                layout: 'month_view',
            })
        })()
    }, [])
    return (
        <Button
            className={triggerClassname}
            variant="accent"
            text={t('ctas.bookCall')}
            icon={<ChevronRight size={14} />}
            data-cal-namespace="discovery-call"
            data-cal-link="trois-cent/discovery-call"
            data-cal-config='{"layout":"month_view"}'
        />
    )
}
