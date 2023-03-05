import React, { useState } from "react";
import Form from "./form.jsx";
import List from "./list.jsx";


//create your first component
const Home = () => {
  const [toDos, setToDos] = useState([]);

  const handleToDo = (addToDos) => {
    setToDos([...toDos, addToDos]);
  };

  const handleDelete = (id) => {
    const newList = toDos.filter((item) => item.id !== id); // crea una nueva lista sin la tarea con el id dado
    setToDos(newList); // actualiza el estado de la lista de tareas
  };
  
  return (
    <div className="content-home">
      <h1>Tareas</h1>
      <div className="content-form">
        <Form handleToDo={handleToDo} />
        {toDos.map((item) => (
          <List key={item.id} toDos={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
