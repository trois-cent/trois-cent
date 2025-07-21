'use client'

import { useTranslations } from 'next-intl'
import { SplitText } from '../ui/split-text'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Goals = () => {
    const t = useTranslations()

    useEffect(() => {
        if (matchMedia('(hover: none)').matches) return
        const parallaxElements = document.querySelectorAll('[data-parallax]')
        const animations: gsap.core.Tween[] = []

        parallaxElements.forEach(el => {
            const yOffset = el.getAttribute('data-speed') || '100px'
            animations.push(
                gsap.fromTo(
                    el,
                    {
                        y: `${yOffset}`,
                    },
                    {
                        y: -yOffset,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'start+=100',
                            scrub: true,
                        },
                    }
                )
            )
        })

        return () => {
            animations.forEach(a => {
                a.revert()
                a.kill()
            })
        }
    }, [])

    return (
        <section id="goals" className="w-full pt-48 md:py-96">
            <ul className="flex flex-col items-center mb-48 md:mb-72">
                <li className="impact-text">
                    <SplitText
                        textAlign="center"
                        from={{ y: '105%', scale: 1.2 }}
                        to={{ y: 0, scale: 1, stagger: { from: 'center', each: 0.025 } }}
                        text={t('goals.creation')}
                        ease="circ.out"
                        duration={0.45}
                    />
                </li>
                <li className="impact-text">
                    <SplitText
                        textAlign="center"
                        from={{ y: '105%', scale: 1.2 }}
                        to={{ y: 0, scale: 1, stagger: { from: 'center', each: 0.025 } }}
                        text={t('goals.growth')}
                        ease="circ.out"
                        duration={0.45}
                    />
                </li>
                <li className="impact-text">
                    <SplitText
                        textAlign="center"
                        from={{ y: '105%', scale: 1.2 }}
                        to={{ y: 0, scale: 1, stagger: { from: 'center', each: 0.025 } }}
                        text={t('goals.optimization')}
                        ease="circ.out"
                        duration={0.55}
                    />
                </li>
            </ul>
            <div className="cont">
                <div
                    data-parallax
                    data-speed={'125px'}
                    className="col-span-12 lg:col-span-5 lg:col-start-2 lg:aspect-[5/4] rounded-lg bg-accent py-8 md:py-12 flex flex-col justify-between gap-y-24"
                >
                    <svg className="w-full" viewBox="0 0 774 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="6.5" x2="774" y2="6.5" stroke="#171717" strokeWidth="3" />
                        <line y1="38.5" x2="774" y2="38.5" stroke="#171717" strokeWidth="3" />
                        <line y1="70.5" x2="774" y2="70.5" stroke="#171717" strokeWidth="3" />
                        <rect x="144" y="64" width="13" height="13" rx="6.5" fill="#171717" />
                        <rect x="545" y="32" width="13" height="13" rx="6.5" fill="#171717" />
                        <rect x="340" width="13" height="13" rx="6.5" fill="#171717" />
                    </svg>

                    <div className="px-8 lg:px-12">
                        <span className="tag small">01</span>
                        <h3 className="mt-6 text-off-white">{t('goals.firstStep')}</h3>
                    </div>
                </div>
                <div
                    data-parallax
                    data-speed={'250px'}
                    className="col-span-12 lg:col-span-5 lg:aspect-[5/4] rounded-lg bg-accent py-8 md:py-12 flex flex-col justify-between gap-y-24"
                >
                    <svg className="w-full" viewBox="0 0 774 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="10.5" x2="774" y2="10.5" stroke="#171717" strokeWidth="3" />
                        <line y1="10.5" x2="351" y2="10.5" stroke="white" strokeWidth="3" />
                        <line y1="42.5" x2="774" y2="42.5" stroke="#171717" strokeWidth="3" />
                        <path d="M0 42.5L556 42.5" stroke="white" strokeWidth="3" />
                        <line y1="74.5" x2="774" y2="74.5" stroke="#171717" strokeWidth="3" />
                        <line y1="74.5" x2="151" y2="74.5" stroke="white" strokeWidth="3" />
                        <rect x="140" y="64" width="21" height="21" rx="10.5" fill="white" />
                        <rect x="545" y="33" width="21" height="21" rx="10.5" fill="white" />
                        <rect x="340" width="21" height="21" rx="10.5" fill="white" />
                    </svg>

                    <div className="px-8 lg:px-12">
                        <span className="tag small">02</span>
                        <h3 className="mt-6 text-off-white">{t('goals.secondStep')}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Goals
