import React from "react";
import Button from "./button.jsx";

const List = ({toDos, handleDelete}) => {
    return(

        <div className="card card-body">
            <p>{toDos}</p>
            <Button onClick={() => handleDelete(toDos.id)}>X</Button>        </div>
    );
};

export default List;