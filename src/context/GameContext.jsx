import { useState, useEffect, createContext } from "react";
import { populateText, changeStyle } from "../utils/functions";
import Inputs from "../components/Inputs";

export const GameContext = createContext();
export const time = 15;

export function GameContextProvider(props) {
  const [modalState, setModalState] = useState("modal hidden");
  const [modalTitle, setModalTitle] = useState(["", ""]);
  const [originalText, setOriginalText] = useState(
    "this is the text that you have to type as fast as possible"
  );
  const [gameBar, setGameBar] = useState("progress-bar");
  const [gameText, setGameText] = useState();
  const [errors, setErrors] = useState(0);
  const [timer, setTimer] = useState(time);
  const [inputText, setInputText] = useState("");
  const [textPointer, setTextPointer] = useState(0);
  const [letterStyles, setLetterStyles] = useState(
    Array(originalText.length).fill("bg-indigo-400")
  );
  const [loop, setLoop] = useState();

  useEffect(() => {
    setGameBar("progress-bar paused");
  },[modalState])

  useEffect(() => {
    setGameText(populateText(originalText, letterStyles));
  }, [letterStyles, originalText]);

  useEffect(() => {
    if (timer === time - 1) {
      setLoop(
        setInterval(() => {
          setTimer((timer) => timer - 1);
        }, 1000)
      );
    }
    if (timer === 0) {
      setModalTitle(["Se termino el tiempo", "modal-title-defeat"]);
      setModalState("modal");
      clearInterval(loop);
    }
    if (typeof gameText !== "undefined") {
      if (textPointer === gameText.length) {
        if (errors === 0) setModalTitle(["Ganaste !", "modal-title-winner"]);
        else setModalTitle(["Completado", "modal-title-complete"]);
        setModalState("modal");
        clearInterval(loop);
      }
    }
  }, [timer]);

  const handleInput = (e) => {
    if ((inputText.length >= 0) & (timer === time)) {
      setTimer(timer - 1);
      setGameBar("progress-bar active");
    }
    if (textPointer < gameText.length) {
      setInputText(e.target.value);
      if (
        gameText[textPointer].props.letter.toLowerCase() !==
        e.target.value.slice(-1)
      ) {
        changeStyle(letterStyles, "wrong", textPointer, setLetterStyles);
        setErrors(errors + 1);
      } else changeStyle(letterStyles, "correct", textPointer, setLetterStyles);
      setTextPointer(textPointer + 1);
    }
  };

  const handleText = (e) => {
    e.preventDefault();
    setOriginalText(e.target[0].value);
    e.target[0].value = "";
  };

  const handleCloseButton = (e) => {
    e.preventDefault()
    setErrors(0)
    setTimer(time)
    setInputText('')
    setLetterStyles(Array(originalText.length).fill("bg-indigo-400"))
    setTextPointer(0)
    setModalState("modal hidden")
    setModalTitle(["", ""])
    setGameBar('progress-bar')
    const input = document.getElementById('gameInput')
    input.value = ''
  }

  return (
    <GameContext.Provider
      value={{
        gameText,
        errors,
        timer,
        inputText,
        handleInput,
        handleText,
        letterStyles,
        gameBar,
        modalState,
        modalTitle,
        handleCloseButton
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
