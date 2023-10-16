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
  Sponser,
} from "./components";

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
    </div>
  );
};

export default App;
