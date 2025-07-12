import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Goals from '@/components/sections/Goals'
import SmoothScrolling from '@/components/tools/SmoothScrolling'
import HeroV2 from '@/components/sections/HeroV2'

export default function Page() {
    return (
        <SmoothScrolling>
            <HeroV2 />
            <Services />
            <Projects />
            <Goals />
            {/* <Footer /> */}
        </SmoothScrolling>
    )
}
