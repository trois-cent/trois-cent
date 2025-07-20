import { useTranslations } from 'next-intl'
import { HeadLogo, Logo } from '../ui/logo'

const Footer = () => {
    const t = useTranslations()

    return (
        <div className="w-full aspect-[2/3] md:aspect-[2.5/3] lg:aspect-none lg:h-[100svh] px-gutter pt-gutter pb-2.5 grid grid-rows-[1fr_auto] gap-2">
            <div className="w-full bg-black rounded-lg flex flex-col items-center justify-center gap-4">
                <Logo color="var(--accent)" className="w-[150px] md:w-[250px]" />
                <HeadLogo color="var(--accent)" className="w-[150px] md:w-[250px]" />
                {/* <div className="w-full flex flex-col items-center gap-1">
                    <a href="mailto:hi@troiscent.ca" className="w-1/3 font-mono text-[18px] text-accent">
                        hi@troiscent.ca
                    </a>
                    <a
                        href="https://www.instagram.com/_troiscent/"
                        className="font-mono text-[18px] text-accent text-left"
                    >
                        Instagram
                    </a>
                </div> */}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-2 p-2">
                <p className="text-[9px] md:text-xs text-black opacity-45 leading-[1em]">{t('copyrights.text')}</p>
                <p className="text-[9px] md:text-xs text-black opacity-45 leading-[1em]">{t('copyrights.from')}</p>
            </div>
        </div>
    )
}

export default Footer
