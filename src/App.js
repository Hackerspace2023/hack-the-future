import './App.css';
import About from "./components/About/about";
import Sponser from "./components/sponsored/sponsored";
import {Leaderboard} from "./components/Leaderboard/leaderboard";
import Footer from "./components/footer/footer"
import Home from "./components/Home/home"
import Navbar from './components/Navbar/Navbar';
function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
            <Sponser/>
            <Leaderboard/>
            <Footer/>
        </div>
    );
}

export default App;
