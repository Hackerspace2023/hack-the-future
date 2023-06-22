import './App.css';
import About from "./components/About/about";
import Sponser from "./components/sponsored/sponsored";
import {Leaderboard} from "./components/Leaderboard/leaderboard";

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <About/>
            <Sponser/>
            <Leaderboard/>
        </div>
    );
}

export default App;
