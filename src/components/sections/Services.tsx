'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/all'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { SplitText } from '../ui/split-text'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

const Services = () => {
    const t = useTranslations()

    useEffect(() => {
        const timelines: Array<gsap.core.Timeline | gsap.core.Tween> = []

        timelines.push(
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.service-svg.branding',
                        start: 'top 75%',
                        end: 'top top',
                        scrub: true,
                    },
                })
                .fromTo(
                    '.service-svg.branding .frame',
                    {
                        drawSVG: '0%',
                    },
                    {
                        drawSVG: '100%',
                        ease: 'none',
                        duration: 0.85,
                    },
                    0
                )
                .fromTo(
                    '#head',
                    {
                        drawSVG: '0%',
                    },
                    {
                        drawSVG: '100%',
                        ease: 'none',
                        duration: 0.95,
                    },
                    0.25
                )
                .fromTo(
                    '.service-svg.branding',
                    {
                        rotate: -60,
                    },
                    {
                        rotate: 0,
                        duration: 1,
                        ease: 'power2.out',
                    },
                    0
                )
        )

        timelines.push(
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.service-svg.design',
                        start: 'top 75%',
                        end: 'top top',
                        scrub: true,
                    },
                })
                .fromTo(
                    '.service-svg.design .frame',
                    {
                        drawSVG: '0%',
                    },
                    {
                        drawSVG: '100%',
                        ease: 'none',
                        duration: 0.75,
                    },
                    0
                )
                .fromTo(
                    '.service-svg.design',
                    {
                        rotate: -60,
                    },
                    {
                        rotate: 0,
                        duration: 1.25,
                        ease: 'power2.out',
                    },
                    0
                )
                .fromTo(
                    '.phone-part',
                    {
                        drawSVG: '0%',
                        y: 100,
                    },
                    {
                        drawSVG: '100%',
                        y: 0,
                        ease: 'none',
                        duration: 0.65,
                        stagger: 0.075,
                    },
                    0.1
                )
        )

        timelines.push(
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.service-svg.development',
                        start: 'top 75%',
                        end: 'top top',
                        scrub: true,
                    },
                })
                .fromTo(
                    '.service-svg.development .frame',
                    {
                        drawSVG: '0%',
                    },
                    {
                        drawSVG: '100%',
                        ease: 'power1.out',
                        duration: 0.85,
                    },
                    0.1
                )
                .fromTo(
                    '.service-svg.development .line',
                    { drawSVG: '0%' },
                    { drawSVG: '100%', ease: 'none', duration: 0.1 },
                    0.1
                )
                .fromTo(
                    '.service-svg.development',
                    {
                        rotate: -60,
                    },
                    {
                        rotate: 0,
                        duration: 1.25,
                        ease: 'power2.out',
                    },
                    0
                )
                .from('.service-svg.development .button', { x: '-200%', duration: 0.75 }, 0.25)
                .from('.service-svg.development .text', { x: '-300%', duration: 0.75 }, 0.25)
                .from('.service-svg.development .cursor', { x: '-500%', y: '10vw', opacity: 0, duration: 0.75 }, 0.25)
        )

        const serviceSquares = document.querySelectorAll('.service-square')
        serviceSquares.forEach(square => {
            timelines.push(
                gsap.from(square, {
                    scale: 0.85,
                    ease: 'circ.out',
                    duration: 1.5,
                    transformOrigin: 'bottom left',
                    scrollTrigger: {
                        trigger: square,
                        start: 'top 100%',
                    },
                })
            )
        })

        return () => {
            timelines.forEach(tl => tl.kill())
        }
    }, [])

    return (
        <section id="services">
            <div className="cont py-48 md:py-72">
                <div className="md:col-start-3 md:col-end-11">
                    <span className="tag">{t('sectionTitles.services.tag')}</span>
                    <h2 className="mt-20 section-title">
                        {t('sectionTitles.services.0')}
                        <br />
                        <span>{t('sectionTitles.services.1')}</span>
                    </h2>
                </div>
            </div>
            <div className="cont">
                {/* Branding */}
                <div className="service-square col-span-12 lg:col-span-4 aspect-square bg-black rounded-lg flex items-center justify-center ">
                    <svg
                        className="service-svg branding w-2/3 h-2/3"
                        viewBox="0 0 440 440"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            className="frame"
                            x="1.5"
                            y="1.5"
                            width="437"
                            height="437"
                            rx="218.5"
                            stroke="var(--white)"
                            strokeWidth="3"
                        />
                        <path
                            id="head"
                            d="M308.5 308.5H246.28L254.678 249.877C255.61 243.37 259.535 237.675 265.284 234.488L308.5 210.533V308.5ZM174.716 234.488C180.465 237.675 184.39 243.37 185.322 249.877L193.72 308.5H131.5V210.533L174.716 234.488ZM308.5 131.5V176.849L240.64 203.313C232.111 206.64 226.216 214.528 225.444 223.649L222.746 255.537H217.254L214.556 223.649C213.784 214.528 207.889 206.64 199.36 203.313L131.5 176.849V131.5H308.5Z"
                            stroke="var(--white)"
                            strokeWidth="3"
                        />
                    </svg>
                </div>
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:gap-10 pb-16 lg:pb-0">
                    <span className="tag black small">01</span>
                    <h3>{t('branding.name')}</h3>
                    {/* <p className="w-2/3">{t('branding.shortDesc')}</p> */}
                    <SplitText
                        text={t('branding.shortDesc')}
                        splitType="lines"
                        from={{ opacity: 0, y: '105%' }}
                        to={{ opacity: 1, y: 0 }}
                        textAlign="left"
                        className="w-2/3"
                    />
                </div>
                {/* Design */}
                <div className="service-square col-span-12 lg:col-span-4 aspect-square bg-accent rounded-lg lg:row-start-2 lg:col-start-5 flex items-center justify-center">
                    <svg
                        className="service-svg design w-2/3 h-2/3"
                        viewBox="0 0 440 440"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_978_23)" id="phone">
                            <rect
                                className="frame"
                                x="1.5"
                                y="1.5"
                                width="437"
                                height="437"
                                rx="219.5"
                                stroke="var(--white)"
                                strokeWidth={3}
                            />
                            <path
                                d="M78 154.5H362C368.351 154.5 373.5 159.649 373.5 166V454.5H66.5V166C66.5 159.649 71.6487 154.5 78 154.5Z"
                                stroke="var(--white)"
                                strokeWidth={3}
                                className="phone-part"
                            />
                            <rect
                                className="phone-part"
                                x="197.5"
                                y="168.5"
                                width="60"
                                height="9"
                                rx="4.5"
                                stroke="var(--white)"
                                strokeWidth={3}
                            />
                            <rect
                                className="phone-part"
                                x="182.5"
                                y="168.5"
                                width="9"
                                height="9"
                                rx="4.5"
                                stroke="var(--white)"
                                strokeWidth={3}
                            />
                            <line
                                className="phone-part"
                                x1="68"
                                y1="190.5"
                                x2="374"
                                y2="190.5"
                                stroke="var(--white)"
                                strokeWidth={3}
                            />
                            <rect
                                className="phone-part"
                                x="94.5"
                                y="356.5"
                                width="119"
                                height="91"
                                rx="2.5"
                                stroke="var(--white)"
                                strokeWidth={3}
                            />
                            <rect
                                className="phone-part"
                                x="226.5"
                                y="356.5"
                                width="119"
                                height="91"
                                rx="2.5"
                                stroke="var(--white)"
                                strokeWidth={3}
                            />
                            <rect
                                className="phone-part"
                                x="154.5"
                                y="242.5"
                                width="132"
                                height="37"
                                rx="2.5"
                                stroke="var(--white)"
                                strokeWidth={3}
                            />
                            <rect
                                className="phone-part"
                                x="200.5"
                                y="293.5"
                                width="41"
                                height="11"
                                rx="2.5"
                                stroke="var(--white)"
                                strokeWidth={3}
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_978_23">
                                <rect width="440" height="440" rx="220" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-center gap-6 lg:gap-10 lg:row-start-2 lg:col-start-9 pb-16 lg:pb-0">
                    <span className="tag small accent">02</span>
                    <h3>{t('design.name')}</h3>
                    {/* <p className="w-2/3">{t('design.shortDesc')}</p> */}
                    <SplitText
                        text={t('design.shortDesc')}
                        splitType="lines"
                        from={{ opacity: 0, y: '105%' }}
                        to={{ opacity: 1, y: 0 }}
                        textAlign="left"
                        className="w-2/3"
                    />
                </div>
                {/* Development */}
                <div className="service-square col-span-12 lg:col-span-4 aspect-square bg-off-white rounded-lg lg:lg:row-start-3 flex items-center justify-center">
                    <svg
                        className="service-svg development w-2/3 h-2/3"
                        viewBox="0 0 440 440"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            className="frame"
                            x="1.5"
                            y="1.5"
                            width="437"
                            height="437"
                            rx="218.5"
                            stroke="var(--black)"
                            strokeWidth="3"
                        />
                        <line className="line" y1="218.5" x2="440" y2="218.5" stroke="var(--black)" strokeWidth="3" />
                        <rect
                            className="button"
                            x="113.5"
                            y="190.5"
                            width="212"
                            height="59"
                            rx="29.5"
                            fill="var(--off-white)"
                            stroke="var(--black)"
                            strokeWidth="3"
                        />
                        <path
                            className="text"
                            d="M157.4 228L161.8 213.6H165.86L170.26 228H167.46L163.54 215.3H164.06L160.2 228H157.4ZM160.04 225V222.46H167.64V225H160.04ZM172.052 228V213.6H176.712C176.826 213.6 177.059 213.603 177.412 213.61C177.766 213.617 178.106 213.64 178.432 213.68C179.592 213.82 180.576 214.223 181.382 214.89C182.189 215.557 182.802 216.403 183.222 217.43C183.642 218.457 183.852 219.58 183.852 220.8C183.852 222.02 183.642 223.143 183.222 224.17C182.802 225.197 182.189 226.043 181.382 226.71C180.576 227.377 179.592 227.78 178.432 227.92C178.106 227.96 177.766 227.983 177.412 227.99C177.059 227.997 176.826 228 176.712 228H172.052ZM174.812 225.44H176.712C176.892 225.44 177.136 225.437 177.442 225.43C177.749 225.417 178.026 225.387 178.272 225.34C178.899 225.213 179.409 224.92 179.802 224.46C180.202 224 180.496 223.447 180.682 222.8C180.876 222.153 180.972 221.487 180.972 220.8C180.972 220.08 180.872 219.397 180.672 218.75C180.479 218.103 180.182 217.557 179.782 217.11C179.382 216.663 178.879 216.38 178.272 216.26C178.026 216.207 177.749 216.177 177.442 216.17C177.136 216.163 176.892 216.16 176.712 216.16H174.812V225.44ZM186.252 228V213.6H190.912C191.025 213.6 191.258 213.603 191.612 213.61C191.965 213.617 192.305 213.64 192.632 213.68C193.792 213.82 194.775 214.223 195.582 214.89C196.388 215.557 197.002 216.403 197.422 217.43C197.842 218.457 198.052 219.58 198.052 220.8C198.052 222.02 197.842 223.143 197.422 224.17C197.002 225.197 196.388 226.043 195.582 226.71C194.775 227.377 193.792 227.78 192.632 227.92C192.305 227.96 191.965 227.983 191.612 227.99C191.258 227.997 191.025 228 190.912 228H186.252ZM189.012 225.44H190.912C191.092 225.44 191.335 225.437 191.642 225.43C191.948 225.417 192.225 225.387 192.472 225.34C193.098 225.213 193.608 224.92 194.002 224.46C194.402 224 194.695 223.447 194.882 222.8C195.075 222.153 195.172 221.487 195.172 220.8C195.172 220.08 195.072 219.397 194.872 218.75C194.678 218.103 194.382 217.557 193.982 217.11C193.582 216.663 193.078 216.38 192.472 216.26C192.225 216.207 191.948 216.177 191.642 216.17C191.335 216.163 191.092 216.16 190.912 216.16H189.012V225.44ZM207.795 228V216.14H203.255V213.6H215.055V216.14H210.515V228H207.795ZM222.842 228.3C221.402 228.3 220.158 227.987 219.112 227.36C218.072 226.733 217.268 225.857 216.702 224.73C216.142 223.603 215.862 222.293 215.862 220.8C215.862 219.307 216.142 217.997 216.702 216.87C217.268 215.743 218.072 214.867 219.112 214.24C220.158 213.613 221.402 213.3 222.842 213.3C224.282 213.3 225.522 213.613 226.562 214.24C227.608 214.867 228.412 215.743 228.972 216.87C229.538 217.997 229.822 219.307 229.822 220.8C229.822 222.293 229.538 223.603 228.972 224.73C228.412 225.857 227.608 226.733 226.562 227.36C225.522 227.987 224.282 228.3 222.842 228.3ZM222.842 225.74C223.755 225.753 224.515 225.557 225.122 225.15C225.728 224.743 226.182 224.167 226.482 223.42C226.788 222.673 226.942 221.8 226.942 220.8C226.942 219.8 226.788 218.933 226.482 218.2C226.182 217.467 225.728 216.897 225.122 216.49C224.515 216.083 223.755 215.873 222.842 215.86C221.928 215.847 221.168 216.043 220.562 216.45C219.955 216.857 219.498 217.433 219.192 218.18C218.892 218.927 218.742 219.8 218.742 220.8C218.742 221.8 218.892 222.667 219.192 223.4C219.498 224.133 219.955 224.703 220.562 225.11C221.168 225.517 221.928 225.727 222.842 225.74ZM242.002 228.3C240.562 228.3 239.319 227.987 238.272 227.36C237.232 226.733 236.429 225.857 235.862 224.73C235.302 223.603 235.022 222.293 235.022 220.8C235.022 219.307 235.302 217.997 235.862 216.87C236.429 215.743 237.232 214.867 238.272 214.24C239.319 213.613 240.562 213.3 242.002 213.3C243.655 213.3 245.042 213.71 246.162 214.53C247.289 215.35 248.082 216.46 248.542 217.86L245.802 218.62C245.535 217.747 245.085 217.07 244.452 216.59C243.819 216.103 243.002 215.86 242.002 215.86C241.089 215.86 240.325 216.063 239.712 216.47C239.105 216.877 238.649 217.45 238.342 218.19C238.035 218.93 237.882 219.8 237.882 220.8C237.882 221.8 238.035 222.67 238.342 223.41C238.649 224.15 239.105 224.723 239.712 225.13C240.325 225.537 241.089 225.74 242.002 225.74C243.002 225.74 243.819 225.497 244.452 225.01C245.085 224.523 245.535 223.847 245.802 222.98L248.542 223.74C248.082 225.14 247.289 226.25 246.162 227.07C245.042 227.89 243.655 228.3 242.002 228.3ZM249.353 228L253.753 213.6H257.813L262.213 228H259.413L255.493 215.3H256.013L252.153 228H249.353ZM251.993 225V222.46H259.593V225H251.993ZM264.005 228V213.6H270.085C270.225 213.6 270.412 213.607 270.645 213.62C270.885 213.627 271.099 213.647 271.285 213.68C272.145 213.813 272.849 214.097 273.395 214.53C273.949 214.963 274.355 215.51 274.615 216.17C274.875 216.823 275.005 217.553 275.005 218.36C275.005 219.567 274.705 220.6 274.105 221.46C273.505 222.313 272.565 222.84 271.285 223.04L270.085 223.12H266.725V228H264.005ZM272.125 228L269.285 222.14L272.085 221.6L275.205 228H272.125ZM266.725 220.58H269.965C270.105 220.58 270.259 220.573 270.425 220.56C270.592 220.547 270.745 220.52 270.885 220.48C271.252 220.38 271.535 220.213 271.735 219.98C271.935 219.74 272.072 219.477 272.145 219.19C272.225 218.897 272.265 218.62 272.265 218.36C272.265 218.1 272.225 217.827 272.145 217.54C272.072 217.247 271.935 216.983 271.735 216.75C271.535 216.51 271.252 216.34 270.885 216.24C270.745 216.2 270.592 216.173 270.425 216.16C270.259 216.147 270.105 216.14 269.965 216.14H266.725V220.58ZM280.744 228V216.14H276.204V213.6H288.004V216.14H283.464V228H280.744Z"
                            fill="var(--black)"
                        />
                        <path
                            className="cursor"
                            d="M293.932 264.368L276.613 264.96L275.637 264.994L275.273 265.899L268.808 281.978L259.461 241.914L293.932 264.368Z"
                            fill="var(--off-white)"
                            stroke="var(--black)"
                            strokeWidth="3"
                        />
                    </svg>
                </div>
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-end gap-6 lg:gap-10 lg:row-start-3 pb-16 lg:pb-0">
                    <span className="tag small">03</span>
                    <h3>{t('development.name')}</h3>
                    {/* <p className="w-2/3">{t('development.shortDesc')}</p> */}
                    <SplitText
                        text={t('development.shortDesc')}
                        splitType="lines"
                        from={{ opacity: 0, y: '105%' }}
                        to={{ opacity: 1, y: 0 }}
                        textAlign="left"
                        className="w-2/3"
                    />
                </div>
            </div>
        </section>
    )
}

export default Services
