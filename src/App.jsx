import { useContext } from "react";
import { GameContext } from "./context/GameContext";
import ProgressBar from "./components/ProgressBar";
import GameInfo from "./components/GameInfo";
import Inputs from "./components/Inputs";
import Modal from "./components/Modal";


function App() {
  const {gameText} = useContext(GameContext)
  return (
    <div className="App bg-indigo-400 h-screen p-9 flex flex-col">
      <h1 className="game-text font-bold text-center mb-6">{gameText}</h1>
      <GameInfo />
      <ProgressBar />
      <Inputs />
      <Modal />
    </div>
  );
}

export default App;
