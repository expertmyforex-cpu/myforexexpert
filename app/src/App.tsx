import ParticleCanvas from './components/ParticleCanvas'
import Navigation from './components/Navigation'
import LiveTicker from './components/LiveTicker'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import LiveResults from './sections/LiveResults'
import Pricing from './sections/Pricing'
import WhyTrustUs from './sections/WhyTrustUs'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy text-slate-offwhite overflow-x-hidden">
      {/* Fixed particle canvas background */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-[1]">
        <Hero />
        <LiveTicker />
        <About />
        <Features />
        <LiveResults />
        <Pricing />
        <WhyTrustUs />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
