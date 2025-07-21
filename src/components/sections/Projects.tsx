'use client'

import { useTranslations } from 'next-intl'
import { HoverVideo } from '../ui/hover-video'
import { SplitText } from '../ui/split-text'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../ui/buttons/button'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const t = useTranslations()

    useEffect(() => {
        const timelines: Array<gsap.core.Timeline | gsap.core.Tween> = []

        const projectVideos = document.querySelectorAll('.project-video')
        projectVideos.forEach(video => {
            timelines.push(
                gsap.from(video, {
                    scale: 0.85,
                    ease: 'circ.out',
                    duration: 1.5,
                    transformOrigin: 'bottom left',
                    scrollTrigger: {
                        trigger: video,
                        start: 'top 100%',
                    },
                })
            )
        })

        return () => {
            timelines.forEach(tl => tl.revert())
        }
    }, [])

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
                <div className="col-span-12 flex flex-col-reverse lg:grid grid-cols-2 gap-grid-gap">
                    <div className="flex items-center lg:justify-center">
                        <div className="w-full max-w-[400px] space-y-4">
                            <h3 className="">{t('cedres-3r.name')}</h3>
                            <ul className="flex gap-1">
                                {t('cedres-3r.tags')
                                    .split(',')
                                    .map(tag => (
                                        <li key={tag} className="tag small">
                                            {tag.trim()}
                                        </li>
                                    ))}
                            </ul>
                            <SplitText
                                text={t('cedres-3r.shortDesc')}
                                splitType="lines"
                                from={{ opacity: 0, y: '105%' }}
                                textAlign="left"
                            />
                        </div>
                    </div>
                    <HoverVideo src="/c3r_stopmotion.mp4" className="project-video rounded-lg w-full aspect-square" />
                </div>
                {/* Jo Barber */}
                <div className="col-span-12 flex flex-col lg:grid grid-cols-2 gap-grid-gap">
                    <HoverVideo
                        src="/jb_stopmotion.mp4"
                        poster="/jb_stopmotion_poster.png"
                        className="project-video rounded-lg w-full aspect-[4/5] xl:aspect-auto xl:h-[calc(100vh_-_var(--gutter)_*_2)]"
                    />
                    <div className="flex items-center lg:justify-center">
                        <div className="w-full max-w-[400px] space-y-4">
                            <h3 className="">{t('jo-barber.name')}</h3>
                            <ul className="flex gap-1">
                                {t('jo-barber.tags')
                                    .split(',')
                                    .map(tag => (
                                        <li key={tag} className="tag small">
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
                <div className="col-span-12 flex flex-col-reverse lg:grid grid-cols-2 gap-grid-gap">
                    <div className="flex items-center lg:justify-center">
                        <div className="w-full max-w-[400px] space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="">{t('athlete-x.name')}</h3>
                                <Button
                                    variant="black"
                                    size="small"
                                    text={t('ctas.visitWebsite')}
                                    onClick={() => window.open('https://athlete-x.io', '_blank')}
                                />
                            </div>
                            <ul className="flex gap-1">
                                {t('athlete-x.tags')
                                    .split(',')
                                    .map(tag => (
                                        <li key={tag} className="tag small">
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
                        </div>
                    </div>
                    <HoverVideo
                        src="/ax_stopmotion.mp4"
                        poster="/ax_stopmotion_poster.png"
                        className="project-video rounded-lg w-full aspect-square"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
