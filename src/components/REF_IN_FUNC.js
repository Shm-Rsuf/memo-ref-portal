import React from "react";

export default function REF_IN_FUNC({ name }) {
  const changeColor = React.createRef();
  const changeText = React.createRef();

  const changeColorHandler = () => {
    changeColor.current.style.color = "purple";
    changeColor.current.style.textTransform = "Capitalize";
  };

  const changeTextHandler = () => {
    changeText.current.textContent = name;
    changeText.current.style.fontSize = "2.5rem";
    changeText.current.style.color = "purple";
  };

  return (
    <div>
      <h2 ref={changeColor}>change color</h2>
      <button onClick={changeColorHandler}>change color</button>

      <h2 ref={changeText}>Arif</h2>
      <button onClick={changeTextHandler}>change text</button>
    </div>
  );
}
