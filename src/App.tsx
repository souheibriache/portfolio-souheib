import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-full h-full font-mono">
      <div className="w-full border-0 justify-center">
        <NavBar />
        <div className="w-full bg-[#10172A] pt-10">
          {/* <Home />
          <AboutMe />
          <Experience />
          <Projects />
          <Contact /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
export default App;
