import AboutAndEvents from "./components/AboutAndEvents"
import Apply from "./components/Apply"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import TopBlackBar from "./components/TopBlackBar"

const App = () => {
  return (
    <>
      <TopBlackBar />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <AboutAndEvents />
      <Apply />
      <Footer />
    </>
  )
}

export default App