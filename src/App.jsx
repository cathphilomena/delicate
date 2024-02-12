import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Process from './sections/process/Process';
import Gallery from './sections/gallery/Gallery';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';


const App = () => {

  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Process/>
      <Gallery/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App
