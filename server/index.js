//sanity check
console.log("--------------------------------------");
console.log("perntod> backend> index.js");
console.log("--------------------------------------");

// --------------------------
//imports
//---------------------------
const app = require('./controller/app');

// --------------------------
//configurations
//---------------------------
const hostname = "localhost";
const port = 3000;



// const express = require("express");
// const app=express()

// const cors=require("cors");

// const pool=require('./db');


// //middleware 
// app.use(cors());
// app.use(express.json());




// //routes-----------

// //create a todo

// app.post("/todos",async(req,res)=>{

//     try{

//       const {description} =req.body;

//       const newToDo=await pool.query("INSERT INTO todo (description) VALUES($1)",[description]);

//       res.json(newToDo)

//     }
//     catch(err){

//         console.error(err.message)

//     }

// })

// // get all to dos


// app.get("/alltodos",async(req,res)=>{

//     try{

     

//       const allToDos=await pool.query("SELECT * from todo");

//       res.json(allToDos.rows)

//     }
//     catch(err){

//         console.error(err.message)

//     }

// })

// //get a todo


// app.get("/todos/:todoid",async(req,res)=>{

//     try{


//         //the todoid here must be the same as params
//         const {todoid}=req.params;
//      console.log(todoid)

//       const todos=await pool.query("SELECT * from todo where todo_id = $1",[todoid]);

//       res.json(todos.rows[0])

//     }
//     catch(err){

//         console.error(err.message)

//     }

// })

// //update



// app.put("/todos/:todoid",async(req,res)=>{

//     try{


//         //the todoid here must be the same as params
//         const {todoid}=req.params;
//      console.log(todoid)

//      const {description} =req.body;


//       const todos=await pool.query("UPDATE todo set description=$2 where todo_id=$1",[todoid,description]);

//       res.json(todos.rows[0])

//     }
//     catch(err){

//         console.error(err.message)

//     }

// })


// //delete

// app.delete("/todos/:todoid",async(req,res)=>{

//     try{


//         //the todoid here must be the same as params
//         const {todoid}=req.params;
//      console.log(todoid)

//       const todos=await pool.query("DELETE from todo where todo_id = $1",[todoid]);

//       res.json(todos.rows[0])

//     }
//     catch(err){

//         console.error(err.message)

//     }

// })




// app.listen(5000,()=>{
//     console.log(`server has started on port 5000`)
// })

//standard for express
app.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
});