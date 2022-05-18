import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import JustForFun from "./components/JustForFun/JustForFun";
import OurGames from "./components/OurGames/OurGames";
import Games from "./components/Games/Games";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Navbar />
        <JustForFun />
        <OurGames />
        <Games />
      </div>
    </div>
  );
}

export default App;
