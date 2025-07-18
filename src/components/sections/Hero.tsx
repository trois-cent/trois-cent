'use client'

import { useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { Logo } from '../ui/logo'
import { SplitText } from '../ui/split-text'
import { useTranslations } from 'next-intl'
import { useLenis } from 'lenis/react'

export const Hero = () => {
    const t = useTranslations()
    const lenis = useLenis()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [])

    const jumpTo = (section: 'projects' | 'services') => {
        if (lenis) lenis.scrollTo(`#${section}`, { duration: 1, easing: t => t * (2 - t) })
        else console.log(lenis)
    }

    return (
        <section id="hero" className="w-full h-[100vh] p-5">
            <div className="w-full h-full flex flex-col justify-between gap-4 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="contents lg:flex flex-col justify-center lg:w-2/3 lg:mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: '-110%' }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 },
                        }}
                        className="w-full mb-5 lg:mb-20 flex items-center justify-center"
                    >
                        <Logo className="w-full" />
                    </motion.h1>

                    <div>
                        <SplitText
                            text={t('hero.desc')}
                            className="mb-4 max-w-[80%] lg:max-w-[380px]"
                            textAlign="left"
                            splitType="lines"
                            delay={100}
                            from={{ y: '105%', skewX: -15 }}
                            to={{ y: '0%', skewX: 0 }}
                            duration={1}
                            startDelay={0.35}
                        />
                        <div className="flex justify-between lg:justify-start lg:gap-1">
                            <div className="flex gap-1">
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: { duration: 0.75, ease: [0.19, 1, 0.22, 1], delay: 0.7 },
                                    }}
                                    className="tag"
                                    onClick={() => jumpTo('services')}
                                >
                                    {t('buttons.services')}
                                </motion.button>
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: { duration: 0.75, ease: [0.19, 1, 0.22, 1], delay: 0.75 },
                                    }}
                                    className="tag"
                                    onClick={() => jumpTo('projects')}
                                >
                                    {t('buttons.projects')}
                                </motion.button>
                            </div>
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.75, ease: [0.19, 1, 0.22, 1], delay: 0.8 },
                                }}
                                className="tag accent"
                            >
                                {t('buttons.bookACall')}
                            </motion.button>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{
                        scale: 0,
                        transformOrigin: 'bottom left',
                    }}
                    animate={{
                        scale: 1,
                        transition: { duration: 2, ease: [0.19, 1, 0.22, 1] },
                    }}
                    className="w-full aspect-square lg:aspect-[unset] bg-off-white rounded-md overflow-hidden"
                >
                    <motion.img
                        // initial={{ opacity: 0 }}
                        // animate={{
                        //     opacity: 1,
                        //     transition: { duration: 1, ease: [0.645, 0.045, 0.355, 1] },
                        // }}
                        className="w-full h-full object-cover"
                        src="/jb_01.png"
                    />
                </motion.div>
            </div>
        </section>
    )
}
