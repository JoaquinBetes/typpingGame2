import { useContext } from "react";
import { GameContext, time } from "../context/GameContext";

function Modal() {
  const { modalState, modalTitle, errors, timer, handleCloseButton } = useContext(GameContext);
  return (
    <div className={modalState}>
      <div className="overlay">
        <div className="modal-content grid grid-flow-row ">
          <h1
            className={
              modalTitle[1] + " place-self-center text-4xl font-bold my-3"
            }
          >
            {modalTitle[0]}
          </h1>
          <span className="text-xl m-1">
            {" "}
            <span className="underline">Tiempo:</span> {time - timer} segundos
          </span>
          <span className="text-xl m-1">Errores: {errors}</span>
          <button onClick={handleCloseButton} className="bg-violet-500 hover:bg-violet-400 text-white text-xl font-semibold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded basis-1/6 ml-1 transition-colors duration-200 my-3">
            cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
