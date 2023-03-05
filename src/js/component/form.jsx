import React, { useState } from "react";

//Inicializamos la tarea

//Inicializamos el componente de React
const Form = ({ handleToDo }) => {
  const [toDo, setTodo] = useState("");

  const handleChange = (e) => {
    //console.log(e.target.value);
    setTodo(e.target.value);
  };
  //   const keyPress = (e) => {
  //     e.keyCode === 13 ? handleToDo(toDo) : console.log("Nein");
  //     setTodo("");
  //   };
  const handleSubmit = (e) => {
    e.preventDefault(); // evita que el formulario se recargue
    handleToDo(toDo); // llama a la función que maneja la tarea
    setTodo(""); // limpia el estado del input
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          id="toDo"
          value={toDo}
          placeholder="Escribe tu tarea..."
          onChange={handleChange}
        ></input>
      </form>
    </>
  );
};

export default Form;
