import { Fade } from "react-awesome-reveal";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import NavBar from "./components/sections/NavBar";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/Custom/ScrollToTop";
import Hero from "./components/sections/Hero";
import Skills from "./components/Custom/Skills";

function App() {
  return (
    <div className=" w-full h-screen font-mono">
      <ToastContainer />
      <div className="relative w-full border-0 h-full flex flex-col items-center justify-start ">
        <NavBar />
        <div className="w-full bg-[#10172A] pt-10">
          <Fade>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />

            <Contact />
          </Fade>
        </div>
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}
export default App;
