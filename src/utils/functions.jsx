import Letter from "../components/Letter";

export function changeStyle(styles, newClass, pointer, setter) {
  let newStyles = styles.map((letter, i) => {
    if (i === pointer) return newClass;
    else return letter;
  });
  setter(newStyles.slice(0));
}

export function populateText(str, letterStyless) {
  const charEls = [];
  str.split("").map((letter, id) => {
    if (id == 0) {
      letter = letter.toUpperCase()
    }
    const span = (
      <Letter key={id} letter={letter} classStyle={letterStyless[id]}></Letter>
    );
    charEls.push(span);
  });
  return charEls;
}
