import React, { useState } from "react";

//Inicializamos la tarea

//Inicializamos el componente de React
const Form = ({ handleToDo }) => {
  const [toDo, setTodo] = useState("");

  const handleChange = (e) => {
    //console.log(e.target.value);
    setTodo(e.target.value);
  };
  const keyPress = (e) => {
    if (e.keyCode === 13 && toDo.length >= 5) {
      handleToDo(toDo);
      setTodo("");
    } else {
      console.log("no tiene más de 5 caractéres");
    }
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        id="toDo"
        onKeyDown={keyPress}
        value={toDo}
        placeholder="Escribe tu tarea..."
        onChange={handleChange}
      ></input>
    </>
  );
};

export default Form;
