import "../index.css";
import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";

function ProgressBar() {
  const { gameBar } = useContext(GameContext);

  return <div className={gameBar + " rounded-sm py-7 mb-4"}> </div>;
}

export default ProgressBar;
