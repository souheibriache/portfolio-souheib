import "./App.css";
import AboutMe from "./components/sections/AboutMe";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Home from "./components/sections/Home";
import NavBar from "./components/sections/NavBar";

function App() {
  return (
    <div className=" w-full h-screen font-mono">
      <div className="w-full border-0 h-full flex flex-col items-center justify-start ">
        <NavBar />
        <div className="w-full bg-[#10172A] pt-10">
          <Home />
          <AboutMe />
          <Experience />
          {/* <Projects /> */}
          {/* <Contact /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
