import React from "react";
import './App.css';
import About from "./components/About/about";
import Sponser from "./components/sponsored/sponsored";
import Footer from "./components/footer/footer"
import Home from "./components/Home/home"
import Navbar from './components/Navbar/Navbar';
import SpecialCard from "./components/ProblemStatement/SpecialCard";
import Gallery from "./components/Gallery/Gallery";
import Prize from "./components/Prizes/Prize";
import Judges from "./components/Judges/judges";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
            <SpecialCard/>
            <Prize/>
            <Gallery/>
            <Judges/>
            <Sponser/>
            <Footer/>
        </div>
    );
}

export default App;
