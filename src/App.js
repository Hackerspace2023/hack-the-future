import React from "react";
import "./App.css";
import About from "./components/About/about";
import Footer from "./components/footer/footer";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/Navbar";
import Judges from "./components/Judges/judges";
import SpecialCard from "./components/ProblemStatement/SpecialCard";
import Prize from "./components/Prizes/Prize";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
            <SpecialCard/>
            <Prize/>
            <Judges/>
            <Footer/>
        </div>
    );
}

export default App;
