import React,{Fragment,useState,useEffect} from "react";

import EditToDo from "./EditToDo";


const ListTodos=()=>{


    const [todos,setTodos]=useState([]);

    // method 1 -- get all todos

    // const getToDos = async e=>{

    //     const res = await fetch("http://localhost:5000/alltodos")

    //     const todoArray= await res.json();

    //     console.log(todoArray)

    // }



    //method 2 -- get all todos


    async function getToDos(){
        const res = await fetch("https://ptodohost.herokuapp.com/alltodos")
        const todoArray= await res.json();
        // console.log(todoArray)

        setTodos(todoArray)

    }


    // delete to do

    async function deleteToDo(todoid){
        try{

        const res=    await fetch(`https://ptodohost.herokuapp.com/todos/${todoid}`,{
                method:'DELETE'
            })

           setTodos(todos.filter(todo => todo.todo_id !== todoid))
            
        }
        catch(err){
            console.error(err.message);
        }

    }


    //update

    


    useEffect(() =>{
      
        getToDos();

      

    },[])

    console.log("======================")
    console.log( todos)

    console.log("======================")
    return(
<Fragment>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
 

    {
todos.map((todo,i) =>(
    <tr>
        <th scope="row">{i+1}</th>
      <td>{todo.description}</td>
      <td> <EditToDo todo={todo}/></td>
      <td>   <button className="btn btn-danger" 
      onClick={()=>deleteToDo(todo.todo_id)}
      >Delete</button></td>

    </tr>

))



    }

  </tbody>
</table>
</Fragment>
    )
}

export default ListTodos;