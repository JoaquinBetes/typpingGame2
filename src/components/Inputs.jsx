import { useContext } from "react";
import { GameContext } from "../context/GameContext";

function Inputs() {
  const { handleInput } = useContext(GameContext);

  return (
    <textarea
      className="bg-violet-500 text-white text-xl placeholder-violet-200 placeholder:text-3xl font-semibold px-2 border-b-4 border-violet-700 w-full placeholder:text-center flex-auto py-5 placeholder:hover:text-violet-800 focus:outline-none "
      onChange={handleInput}
      placeholder="Start typping..."
      id="gameInput"
    />
  );
}

export default Inputs;
