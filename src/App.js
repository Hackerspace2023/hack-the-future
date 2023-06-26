import './App.css';
import About from "./components/About/about";
import Sponser from "./components/sponsored/sponsored";
import {Leaderboard} from "./components/Leaderboard/leaderboard";
import Footer from "./components/footer/footer"
import Home from "./components/Home/home"
import Navbar from './components/Navbar/Navbar';
<<<<<<< HEAD
import Judges from './components/Judges/judges';
import Gallery from './components/Gallery/Gallery';
import Prize from './components/Prizes/Prize';
import SpecialCard from './components/ProblemStatement/SpecialCard';
// import Judges1 from './components/Judges1/Judges1';
=======
>>>>>>> 40544ec6d6879a68f04c698db9dcde2c19e7c8e8
function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
<<<<<<< HEAD
            <SpecialCard/>
            <Prize/>
            <Gallery/>
            {/* <Judges1/> */}
            <Judges/>

            {/* <Sponser/> */}
            {/* <Leaderboard/> */}
=======
            <Sponser/>
            <Leaderboard/>
>>>>>>> 40544ec6d6879a68f04c698db9dcde2c19e7c8e8
            <Footer/>
        </div>
    );
}

export default App;
