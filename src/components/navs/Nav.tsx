'use client'

import { useEffect, useState } from 'react'
import CallBooker from '../ui/CallBooker'
import { Button } from '../ui/buttons/button'
import { useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const Nav = () => {
    const t = useTranslations()
    const lenis = useLenis()

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClose = () => {
        gsap.set('#menu-body', { display: 'none' })

        setMenuOpen(false)
    }

    const handleMenuOpen = () => {
        gsap.set('#menu-body', {
            display: 'flex',
            transformOrigin: `top ${matchMedia('(min-width: 768px)').matches ? '50%' : '0%'}`,
            x: matchMedia('(min-width: 768px)').matches ? '-50%' : '0%',
        })
        gsap.fromTo(
            '#menu-body',
            { opacity: 0, scale: 0.65 },
            { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out' }
        )

        setMenuOpen(true)
    }

    useEffect(() => {
        if (!lenis) return console.log('Lenis not initialized')

        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const scrollPosition = lenis.scroll

            if (scrollPosition > windowHeight * 0.95) {
                gsap.to('nav', { y: 0, duration: 0.85, ease: 'power2.out' })
            } else {
                gsap.to('nav', { y: '-105%', duration: 0.85, ease: 'power2.out' })
                handleMenuClose()
            }
        }

        lenis.on('scroll', handleScroll)

        return () => {
            lenis.off('scroll', handleScroll)
        }
    }, [lenis])

    const jumpTo = (section: 'hero' | 'projects' | 'services' | 'contact-us') => {
        if (lenis) lenis.scrollTo(`#${section}`, { duration: 1.15, lerp: 0.15 })
        else console.log('Lenis not initialized: ', lenis)

        handleMenuClose()
    }

    return (
        <nav className="fixed z-50 top-0 right-0 p-5 flex items-center gap-1 -translate-y-[105%]">
            <div className="relative">
                <Button
                    text={menuOpen ? t('kw.close') : t('kw.menu')}
                    variant="blurred"
                    onClick={menuOpen ? handleMenuClose : handleMenuOpen}
                />

                <div
                    id="menu-body"
                    className="hidden absolute z-50 top-[calc(100%+4px)] left-0 md:left-1/2 w-max p-6 bg-[rgba(17,17,17,0.5)] backdrop-blur-md rounded-sm flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <button
                            className="text-[20px] text-white lg:text-white-45 hover:text-white font-medium text-left cursor-pointer fast-215 flex items-center gap-1 hover:gap-2"
                            onClick={() => jumpTo('services')}
                        >
                            {t('sectionTitles.services.tag')}
                            <ArrowRight size={13} />
                        </button>
                        <button
                            className="text-[20px] text-white lg:text-white-45 hover:text-white font-medium text-left cursor-pointer fast-215 flex items-center gap-1 hover:gap-2"
                            onClick={() => jumpTo('projects')}
                        >
                            {t('sectionTitles.projects.tag')}
                            <ArrowRight size={13} />
                        </button>
                        <button
                            className="text-[20px] text-white lg:text-white-45 hover:text-white font-medium text-left cursor-pointer fast-215 flex items-center gap-1 hover:gap-2"
                            onClick={() => jumpTo('contact-us')}
                        >
                            {t('sectionTitles.contacts.tag')}
                            <ArrowRight size={13} />
                        </button>
                    </div>
                    <div className="w-full h-px bg-white opacity-100" />
                    <div className="flex items-center justify-between gap-4">
                        <a
                            className="text-sm font-medium text-white-45 hover:text-white fast-215 cursor-pointer flex items-center gap-1"
                            href="https://instagram.com/_troiscent/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('kw.instagram')}
                            <ArrowUpRight size={13} />
                        </a>
                        <Link
                            href="/"
                            locale={t('lang') === 'fr' ? 'en' : 'fr'}
                            className="text-sm font-medium text-white-45 hover:text-white fast-215 cursor-pointer flex items-center gap-1"
                        >
                            {t('lang') === 'fr' ? 'English' : 'Français'}
                            <ArrowUpRight size={13} />
                        </Link>
                    </div>
                </div>
            </div>
            <CallBooker />
        </nav>
    )
}

export default Nav
