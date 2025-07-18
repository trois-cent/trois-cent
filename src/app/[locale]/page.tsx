import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Goals from '@/components/sections/Goals'
import SmoothScrolling from '@/components/tools/SmoothScrolling'
import Hero from '@/components/sections/Hero'

export default function Page() {
    return (
        <SmoothScrolling>
            <Hero />
            <Services />
            <Projects />
            <Goals />
            {/* <Footer /> */}
        </SmoothScrolling>
    )
}
