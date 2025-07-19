'use client'

import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Goals from '@/components/sections/Goals'
import SmoothScrolling from '@/components/tools/SmoothScrolling'
import Hero from '@/components/sections/Hero'
import ContactUs from '@/components/sections/ContactUs'

export default function Page() {
    return (
        <SmoothScrolling>
            <Hero />
            <Services />
            <Projects />
            <Goals />
            <ContactUs />
            {/* <Footer /> */}
        </SmoothScrolling>
    )
}
