import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Treatments } from "@/components/Treatments"
import { Differentials } from "@/components/Differentials"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-secondary selection:text-primary scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Differentials />
      </main>
      <Footer />
    </div>
  )
}

export default App
