import { BrowserRouter } from "react-router-dom";

import  { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import FunFacts from "./components/facts";
import Family from "./components/Family";
import Future from "./components/Future";
import Pictures from "./components/pictures";
import Video from "./components/Video";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Pictures />
        <Family />
        <Future />
        <FunFacts />
        <Video />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )

}


export default App