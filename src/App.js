import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/works"
import FeedBacks from "./components/FeedBacks";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/StarsCanvas"

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <FeedBacks/>
      <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
      </div>
    </div>
  );
}

export default App;
