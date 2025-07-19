import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { Button } from './buttons/button'
import { ChevronRight } from 'lucide-react'

type CallBookerProps = {
    triggerClassname?: string
}

export default function CallBooker({ triggerClassname }: CallBookerProps) {
    useEffect(() => {
        ;(async function () {
            const cal = await getCalApi({ namespace: 'discovery-call-premiere-rencontre' })
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
            text="Réserver un appel"
            icon={<ChevronRight size={14} />}
            data-cal-namespace="discovery-call-premiere-rencontre"
            data-cal-link="etienne-courchesne/discovery-call-premiere-rencontre"
            data-cal-config='{"layout":"week_view"}'
        />
    )
}
