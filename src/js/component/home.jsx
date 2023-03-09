import React, { useState } from "react";
import Form from "./form.jsx";
import List from "./list.jsx";

//create your first component
const Home = () => {
  const [toDos, setToDos] = useState([]);
  const [doneToDos, setDoneToDos] = useState([]); // lista de tareas completadas

  const handleToDo = (addToDo) => {
    setToDos([...toDos, addToDo]);
  };

  const handleCheck = (task) => {
    const copiaToDos = [...toDos];
    const copiaDoneToDos = [...doneToDos];
    copiaDoneToDos.push(copiaToDos); // añade la tarea completada al final del array de tareas completadas
    setDoneToDos(copiaDoneToDos); // actualiza el estado con el nuevo array con la tarea completada

    const newList = toDos.filter((item) => item !== task); //tarea diferente la guarda
    setToDos(newList); // actualiza el estado con el nuevo array sin la tarea completada
  };

  const handleDelete = (task) => {
    const newList = toDos.filter((item) => item !== task); //toda tarea que sea diferente la guardo
    setToDos(newList); // actualiza el estado de la lista de tareas
  };

  return (
    <div className="content-home">
      <h1>Tareas</h1>
      <div className="content-form">
        <Form handleToDo={handleToDo} />
        {toDos.map((item, key) => (
          <List
            key={key}
            toDo={item}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
        <h2>Tareas completadas</h2>
        {doneToDos.map((item, key) => (
          <List key={key} toDo={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
