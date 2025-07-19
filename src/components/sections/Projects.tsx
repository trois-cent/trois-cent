'use client'

import { motion } from 'framer-motion'

import { useTranslations } from 'next-intl'
import { HoverVideo } from '../ui/hover-video'
import { SplitText } from '../ui/split-text'

const Projects = () => {
    const t = useTranslations()

    return (
        <section id="projects">
            <div className="cont py-48 md:py-72">
                <div className="col-span-12 lg:col-span-6 lg:col-start-3 lg:col-end-11">
                    <span className="tag">{t('sectionTitles.projects.tag')}</span>
                    <h2 className="mt-20 section-title">
                        {t('sectionTitles.projects.0')}
                        <br />
                        <span>{t('sectionTitles.projects.1')}</span>
                    </h2>
                </div>
            </div>
            <div className="cont space-y-12 lg:space-y-0">
                {/* Cèdres 3R */}
                <div className="col-span-12 grid grid-cols-2 gap-grid-gap">
                    <div className="flex flex-col lg:flex-col-reverse lg:items-center lg:justify-center gap-4">
                        <h3 className="">{t('cedres-3r.name')}</h3>
                        <ul className="flex gap-1">
                            {t('cedres-3r.tags')
                                .split(',')
                                .map(tag => (
                                    <li key={tag} className="tag">
                                        {tag.trim()}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <HoverVideo src="/c3r_stopmotion.mp4" className="rounded-lg w-full aspect-square" />
                </div>
                {/* Jo Barber */}
                <div className="col-span-12 grid grid-cols-2 gap-grid-gap">
                    <HoverVideo
                        src="/jb_stopmotion.mp4"
                        className="rounded-lg w-full aspect-[4/5] xl:aspect-auto xl:h-[calc(100vh_-_var(--gutter)_*_2)]"
                    />
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-[400px] space-y-8">
                            <h3 className="">{t('jo-barber.name')}</h3>
                            <ul className="flex gap-1">
                                {t('jo-barber.tags')
                                    .split(',')
                                    .map(tag => (
                                        <li key={tag} className="tag">
                                            {tag.trim()}
                                        </li>
                                    ))}
                            </ul>
                            <SplitText
                                text={t('jo-barber.shortDesc')}
                                splitType="lines"
                                from={{ opacity: 0, y: '105%' }}
                                textAlign="left"
                            />
                        </div>
                    </div>
                </div>
                {/* Athlete-X */}
                {/* Cèdres 3R */}
                <div className="col-span-12 grid grid-cols-2 gap-grid-gap">
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-[400px] space-y-8">
                            <h3 className="">{t('athlete-x.name')}</h3>
                            <ul className="flex gap-1">
                                {t('athlete-x.tags')
                                    .split(',')
                                    .map(tag => (
                                        <li key={tag} className="tag">
                                            {tag.trim()}
                                        </li>
                                    ))}
                            </ul>
                            <SplitText
                                text={t('athlete-x.shortDesc')}
                                splitType="lines"
                                from={{ opacity: 0, y: '105%' }}
                                to={{ opacity: 1, y: 0 }}
                                textAlign="left"
                            />
                            <motion.a
                                initial={{ opacity: 0, y: '105%' }}
                                whileInView={{ opacity: 1, y: 0 }}
                                href="https://athlete-x.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="simple-link flex items-center gap-1.5 hover:gap-3 fast-215"
                            >
                                <SplitText
                                    text={t('ctas.visitWebsite')}
                                    splitType="lines"
                                    from={{ opacity: 0, y: '105%' }}
                                    to={{ opacity: 1, y: 0 }}
                                    textAlign="left"
                                />
                            </motion.a>
                        </div>
                    </div>
                    <HoverVideo src="/ax_stopmotion.mp4" className="rounded-lg w-full aspect-square" />
                </div>
            </div>
        </section>
    )
}

export default Projects
