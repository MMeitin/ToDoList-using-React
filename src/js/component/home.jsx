import React, { useState } from "react";
import Form from "./form.jsx";
import List from "./list.jsx";

//create your first component
const Home = () => {
  const [toDos, setToDos] = useState([]);

  const handleToDo = (addToDos) => {
    setToDos([...toDos, addToDos]);
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
          <List key={key} toDos={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
