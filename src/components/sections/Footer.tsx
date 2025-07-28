import { useTranslations } from 'next-intl'
import { HeadLogo, Logo } from '../ui/logo'
import { Link } from '@/i18n/navigation'

const Footer = () => {
    const t = useTranslations()

    return (
        <div className="w-full aspect-[4/5] md:aspect-auto lg:aspect-auto px-gutter pt-gutter pb-2.5 grid grid-rows-[1fr_auto] gap-2">
            <div className="w-full bg-black rounded-lg flex flex-col items-center justify-center gap-4 md:p-[10vw]">
                <Logo color="var(--white)" className="w-[150px] md:w-full" />
                <HeadLogo color="var(--white)" className="md:hidden w-[150px] md:w-[250px]" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-2 p-2">
                <p className="text-[9px] md:text-xs text-black opacity-45 leading-[1em]">{t('copyrights.text')}</p>
                <div className="flex items-center gap-2">
                    <p className="text-[9px] md:text-xs text-black opacity-45 leading-[1em]">{t('copyrights.from')}</p>
                    {/* <button className="text-[9px] md:text-xs underline text-black opacity-45 leading-[1em]">
                        {t('copyrights.cookies')}
                    </button> */}
                    <Link
                        href="/privacy"
                        className="text-[9px] md:text-xs underline text-black opacity-45 leading-[1em]"
                    >
                        {t('copyrights.privacy')}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
