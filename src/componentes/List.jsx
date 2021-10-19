import React from "react";

const List = ({todos, setTodos}) => {
    const handleDelete = ({ id }) =>  {
        setTodos(todos.filter((todo) => todo.id !== id ));
    }
    return(
        <div>
            {todos.map((todo) => (
                <li className="list-item" key="{todo.id}">
                    <input type="text" value={todo.title} className="product" onChange={(event) => event.preventDefault()}></input>
                    <input type="number" value={todo.cash} className="price" onChange={(event) => event.preventDefault()}></input>
                    <input type="text" value={todo.name} className="description" onChange={(event) => event.preventDefault()}></input>
                    <button type="button"className="btn btn-success" onClick={() => handleDelete(todo)}> X </button>
                </li>
            ))}
        </div>
    );
}

export default List;