'use client'

import { useTranslations } from 'next-intl'
import { HoverVideo } from '../ui/hover-video'

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
                <div className="col-span-12 lg:col-span-6">
                    {/* <div className="bg-off-white rounded-lg w-full aspect-[3/2]"></div> */}
                    <HoverVideo src="/c3r_stopmotion.mp4" className="rounded-lg w-full aspect-[4/3]" />
                    <h3 className="mt-2">{t('cedres-3r.name')}</h3>
                    <ul className="flex gap-1 mt-2">
                        {t('cedres-3r.tags')
                            .split(',')
                            .map(tag => (
                                <li key={tag} className="tag small">
                                    {tag.trim()}
                                </li>
                            ))}
                    </ul>
                </div>
                {/* Jo Barber */}
                <div className="col-span-12 lg:col-span-6 relative">
                    {/* <div className="bg-off-white rounded-lg w-full h-[60vh] xl:h-[calc(100vh_-_var(--gutter)_*_2)]"></div> */}
                    <HoverVideo
                        src="/jb_stopmotion.mp4"
                        className="rounded-lg w-full aspect-[4/5] xl:aspect-auto xl:h-[calc(100vh_-_var(--gutter)_*_2)]"
                    />
                    <div className="lg:absolute bottom-0 right-[calc(100%_+_var(--grid-gap))] flex flex-col w-max lg:items-end">
                        <h3 className="mt-2">{t('jo-barber.name')}</h3>
                        <ul className="flex gap-1 mt-2">
                            {t('jo-barber.tags')
                                .split(',')
                                .map(tag => (
                                    <li key={tag} className="tag small">
                                        {tag.trim()}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                {/* Athlete-X */}
                <div className="col-span-12 grid grid-cols-12 gap-[var(--grid-gap)]">
                    {/* <div className="col-span-12 lg:col-span-9 bg-off-white rounded-lg w-full h-[40vh] xl:h-[calc(100vh_-_var(--gutter)_*_2)]"></div> */}
                    <HoverVideo
                        src="/ax_stopmotion.mp4"
                        className="col-span-12 lg:col-span-6 rounded-lg w-full aspect-square max-h-[calc(100vh_-_var(--gutter)_*_2)]"
                    />
                    <div className="col-span-12 lg:col-span-3 flex flex-col justify-end">
                        <h3 className="mt-2">{t('athlete-x.name')}</h3>
                        <ul className="flex gap-1 mt-2">
                            {t('athlete-x.tags')
                                .split(',')
                                .map(tag => (
                                    <li key={tag} className="tag small">
                                        {tag.trim()}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
