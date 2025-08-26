
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import Brand from "./sections/Brand"
import Cta from "./sections/Cta"
import Reviews from "./sections/Reviews"
import Products from "./sections/Products"
import "./styles/main.scss"
function App() {

  return (
    <>
      <Header />
      <main>
        <section id="Hero" className="Section">
          <Hero />
        </section>
        <section id="Brand" className="Section">
          <Brand />
        </section>
        <section id="Products" className="Section">
          <Products />
        </section>
        <section id="Reviews" className="Section">
          <Reviews />
        </section>
        <section id="Cta" className="Section">
          <Cta />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App