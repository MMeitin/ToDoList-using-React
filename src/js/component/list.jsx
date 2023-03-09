import React from "react";

const List = ({ toDo, handleDelete, handleCheck }) => {
  return (
    <div className="card card-body">
      <p>{toDo}</p>
      <button onClick={() => handleDelete(toDo)}>X</button>
      <input
        type="checkbox"
        onChange={() => (handleCheck(toDo), handleCheck2)}
      />
    </div>
  );
};

export default List;
