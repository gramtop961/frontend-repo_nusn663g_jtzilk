import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Everywhere from './components/Everywhere'
import Books from './components/Books'
import Comparison from './components/Comparison'
import Audience from './components/Audience'
import DayFlow from './components/DayFlow'
import Results from './components/Results'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10]">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(29,78,216,0.15),transparent_40%)]" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Problems />
        <HowItWorks />
        <Features />
        <Everywhere />
        <Books />
        <Comparison />
        <Audience />
        <DayFlow />
        <Results />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
