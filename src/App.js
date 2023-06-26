import React from "react";
import "./App.css";
import About from "./components/About/about";
import Footer from "./components/footer/footer";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
