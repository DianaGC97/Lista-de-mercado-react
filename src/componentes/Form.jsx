import React from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({product, setProduct, price, setPrice, description, setDescription, todos, setTodos }) => {
    const onproductChange = (event) => {
        setProduct(event.target.value);
    };

    const onPrice = (event) =>{
        setPrice(event.target.value);
    }

    const ondescription = (event) => {
        setDescription(event.target.value);
    }
    
    

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: product, cash: price, name: description, completed: false}]);
        setProduct("");
        setPrice("");
        setDescription("");
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Nombre del producto" className="text-center" value={product} required onChange={onproductChange}></input>
            <input type="number" placeholder="Precio" className=" text-center" value={price} required onChange={onPrice}></input>
            <input type="text" placeholder="Descripcion" className="text-center" value={description} required onChange={ondescription}></input>
            <button className="btn btn-dark" type="submit">Registrar</button>
        </form>
    );
}

export default Form;