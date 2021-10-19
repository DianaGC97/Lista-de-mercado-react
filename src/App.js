import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import Title from './componentes/Title'
import Form from './componentes/Form'
import List from './componentes/List'
import "./App.css";

function App (){

  const [product, setProduct] = useState("");
  const[price, setPrice] = useState("")
  const[description, setDescription] = useState("")
  const[todos, setTodos] = useState([]);

  return(
    <div className="container">

           {/* F1 - Titulo */}
          <Title />

        {/* F2 - Form */}
        <Form product={product} setProduct={setProduct} 
        price={price} setPrice={setPrice} 
        description={description} setDescription={setDescription}
        todos={todos} setTodos={setTodos} />

        {/* F3 - List */}
        <List todos={todos} setTodos={setTodos}/>

      </div>
  );
}

export default App;