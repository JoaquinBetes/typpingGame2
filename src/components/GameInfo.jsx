import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import NewText from "./NewText";

function GameInfo() {
  const { errors, timer, handleText } = useContext(GameContext);

  return (
    <div className="text-xl">
      <div className="grid grid-cols-2">
        <span><span className="font-semibold">{timer}</span> seconds </span>
        <span className="text-right mr-14"><span className="font-semibold underline">Errors:</span> {errors}</span>
      </div>
      <NewText handler={handleText} />
    </div>
  );
}

export default GameInfo;
