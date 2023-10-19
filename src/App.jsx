import React from "react";
import "./App.css";
import {
  About,
  Footer,
  Home,
  Navbar,
  // Judges,
  Theme,
  Prize,
  Scheduled,
  Faq,
  Venue,
  Gallery,
  Sponser
} from "./components";

import { TopButton } from "./components/TopButton";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Theme />
      <Venue />
      <Scheduled />
      <Prize />
      {/* <Judges/> */}
      <Sponser />
      <Faq />
      <Gallery />
      <Footer />
      <TopButton />
    </div>
  );
};

export default App;
