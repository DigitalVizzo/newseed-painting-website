'use client'

import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import BeforeAfter from '@/components/BeforeAfter'
import Services from '@/components/Services'
import About from '@/components/About'
import Process from '@/components/Process'
import Faq from '@/components/Faq'
import Guarantee from '@/components/Guarantee'
import Reviews from '@/components/Reviews'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import FloatingCta from '@/components/FloatingCta'
import LeafCursor from '@/components/LeafCursor'

export default function Home() {
  return (
    <SmoothScroll>
      <main style={{ background: '#FAFAF8', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <TrustBar />
        <BeforeAfter />
        <Services />
        <About />
        <Process />
        <Faq />
        <Guarantee />
        <Reviews />
        <CtaSection />
        <Footer />
        <FloatingCta />
      <LeafCursor />
      </main>
    </SmoothScroll>
  )
}
