'use client'

import ReactLenis, { LenisRef } from 'lenis/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

interface SmoothScrollingProps {
    children: React.ReactNode | React.ReactNode[]
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
    const ref = useRef<LenisRef>(null)

    useEffect(() => {
        const update = (time: number) => {
            ref.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update)

        return () => {
            gsap.ticker.remove(update)
        }
    }, [])

    return (
        <ReactLenis root options={{ autoRaf: false, lerp: 0.15, syncTouch: false }} ref={ref}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScrolling
