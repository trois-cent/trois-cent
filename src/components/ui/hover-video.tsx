import React, { useRef, useState, useEffect } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'

const isTouchDevice = () => typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

interface HoverVideoProps {
    src: string
    poster?: string
    width?: number
    height?: number
    className?: string
}

export const HoverVideo: React.FC<HoverVideoProps> = ({ src, poster, className = '' }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const rawX = useMotionValue(0)
    const rawY = useMotionValue(0)
    const x = useSpring(rawX, { stiffness: 150, damping: 30 })
    const y = useSpring(rawY, { stiffness: 150, damping: 30 })

    const mousePosition = useRef({ x: 0, y: 0 })

    const handleMouseEnter = () => {
        videoRef.current?.play()
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        videoRef.current?.pause()
        if (videoRef.current) videoRef.current.currentTime = 0
        setIsHovering(false)
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        mousePosition.current = { x: e.clientX, y: e.clientY }
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
            rawX.set(e.clientX - rect.left)
            rawY.set(e.clientY - rect.top)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const rect = containerRef.current?.getBoundingClientRect()
            if (rect) {
                rawX.set(mousePosition.current.x - rect.left)
                rawY.set(mousePosition.current.y - rect.top)
            }
        }
        window.addEventListener('scroll', handleScroll, true)
        return () => {
            window.removeEventListener('scroll', handleScroll, true)
        }
    }, [])

    const onPress = () => {
        if (videoRef.current) videoRef.current.pause()
    }

    const onPressRelease = () => {
        if (videoRef.current) videoRef.current.play()
    }

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
                overflow: 'hidden',
                borderRadius: 8,
                cursor: 'pointer',
                position: 'relative',
            }}
            className={className}
        >
            <motion.video
                onViewportEnter={() => {
                    if (videoRef.current && matchMedia('(hover: none)').matches) videoRef.current.play()
                }}
                onViewportLeave={() => {
                    if (videoRef.current && matchMedia('(hover: none)').matches) videoRef.current.pause()
                }}
                ref={videoRef}
                src={src}
                poster={poster}
                muted
                loop
                playsInline
                preload="auto"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                onTapStart={() => {
                    onPress()
                    setIsPressed(true)
                }}
                onTap={() => {
                    onPressRelease()
                    setIsPressed(false)
                }}
                onTapCancel={() => {
                    onPressRelease()
                    setIsPressed(false)
                }}
            />
            <AnimatePresence mode="wait">
                {isHovering && !isTouchDevice() && (
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: isPressed ? 0.75 : 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full cursor-pointer flex items-center justify-center text-xs text-white font-medium tracking-wider uppercase pointer-events-none"
                        style={{
                            x,
                            y,
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(10px)',
                            userSelect: 'none',
                        }}
                    >
                        {isPressed ? 'Release' : 'Press'}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
