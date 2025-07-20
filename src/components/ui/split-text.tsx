import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText as GSAPSplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, GSAPSplitText)

export interface SplitTextProps {
    text: string
    className?: string
    delay?: number
    startDelay?: number
    duration?: number
    ease?: string | ((t: number) => number)
    splitType?: 'chars' | 'words' | 'lines' | 'words, chars'
    from?: gsap.TweenVars
    to?: gsap.TweenVars
    threshold?: number
    rootMargin?: string
    textAlign?: React.CSSProperties['textAlign']
    onLetterAnimationComplete?: () => void
}

export const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = '',
    delay = 100,
    startDelay = 0,
    duration = 0.6,
    ease = 'power3.out',
    splitType = 'chars',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '0px',
    textAlign = 'center',
    onLetterAnimationComplete,
}) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const animationCompletedRef = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el || animationCompletedRef.current) return

        const absoluteLines = splitType === 'lines'
        if (absoluteLines) el.style.position = 'relative'

        const splitter = new GSAPSplitText(el, {
            type: splitType,
            absolute: absoluteLines,
            linesClass: 'split-line',
        })

        let targets: Element[]
        switch (splitType) {
            case 'lines':
                targets = splitter.lines
                break
            case 'words':
                targets = splitter.words
                break
            case 'words, chars':
                targets = [...splitter.words, ...splitter.chars]
                break
            default:
                targets = splitter.chars
        }

        targets.forEach(t => {
            ;(t as HTMLElement).style.willChange = 'transform, opacity'
        })

        const startPct = (1 - threshold) * 100
        const m = /^(-?\d+)px$/.exec(rootMargin)
        const raw = m ? parseInt(m[1], 10) : 0
        const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`
        const start = `top ${startPct}%${sign}`

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start,
                toggleActions: 'play none none none',
                once: true,
            },
            smoothChildTiming: true,
            onComplete: () => {
                animationCompletedRef.current = true
                gsap.set(targets, {
                    ...to,
                    clearProps: 'willChange',
                    immediateRender: true,
                })
                onLetterAnimationComplete?.()
            },
        })

        tl.set(targets, { ...from, immediateRender: false, force3D: true })
        tl.to(targets, {
            ...to,
            duration,
            ease,
            delay: startDelay,
            stagger: to.stagger || delay / 1000,
            force3D: true,
            visibility: 'visible',
        })

        return () => {
            tl.scrollTrigger?.kill()
            tl.kill()
            gsap.killTweensOf(targets)
            splitter.revert()
        }
    }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, startDelay, onLetterAnimationComplete])

    return (
        <p
            ref={ref}
            className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
            style={{
                textAlign,
                wordWrap: 'break-word',
                visibility: 'hidden',
            }}
        >
            {text}
        </p>
    )
}
