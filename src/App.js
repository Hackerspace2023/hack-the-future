import './App.css';
import About from "./components/About/about";
import Sponser from "./components/sponsored/sponsored";
// import {Leaderboard} from "./components/Leaderboard/leaderboard";
import Footer from "./components/footer/footer"
import Home from "./components/Home/home"
import Navbar from './components/Navbar/Navbar';
import Theme from "./components/Theme/Theme";
// import judges from "./components/Judges/judges";

function App() {
    return (
        <div className="App">
            <div>
                <Navbar/></div>
            <div><Home/></div>
            <div><About/></div>
            <div><Sponser/></div>
            <div><Theme/></div>
            {/*<judges/>*/}
            {/*<Leaderboard/>*/}
            <div><Footer/></div>
        </div>
    );
}

export default App;
