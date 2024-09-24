import { Fade } from "react-awesome-reveal";
import AboutMe from "./components/sections/AboutMe";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Home from "./components/sections/Home";
import NavBar from "./components/sections/NavBar";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/Custom/ScrollToTop";

function App() {
  return (
    <div className=" w-full h-screen font-mono">
      <ToastContainer />
      <div className="relative w-full border-0 h-full flex flex-col items-center justify-start ">
        <NavBar />
        <div className="w-full bg-[#10172A] pt-10">
          <Fade>
            <Home />
            <AboutMe />
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
