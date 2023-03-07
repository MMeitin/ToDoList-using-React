import React from "react";

const List = ({ toDos, handleDelete }) => {
  return (
    <div className="card card-body">
      <p>{toDos}</p>
      <button onClick={() => handleDelete(toDos)}>X</button>
    </div>
  );
};

export default List;
