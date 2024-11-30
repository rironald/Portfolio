import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/*About*/}
      <About />
      {/*Experience*/}
      <Experience />
      {/*Projects*/}
      <Projects />
      {/*Contact*/}
      <Contact />
      {/*Footer*/}
      <Footer />
    </>
  );
}

export default App;
