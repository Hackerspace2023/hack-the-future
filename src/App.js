import './App.css';
import About from "./components/About/about";
import Sponser from "./components/sponsored/sponsored";
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
            <Footer/>
        </div>
    );
}

export default App;
