import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Goals from '@/components/sections/Goals'
import SmoothScrolling from '@/components/tools/SmoothScrolling'
import Hero from '@/components/sections/Hero'
import ContactUs from '@/components/sections/ContactUs'
import Footer from '@/components/sections/Footer'
import Nav from '@/components/navs/Nav'

export default function Page() {
    return (
        <>
            <SmoothScrolling>
                <Nav />
                <Hero />
                <Services />
                <Goals />
                <Projects />
                <ContactUs />
                <Footer />
            </SmoothScrolling>
        </>
    )
}
