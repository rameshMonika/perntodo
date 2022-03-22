console.log("---------------------------------------------------------");
console.log("perntodo> server> model > pernToDoList.js");
console.log("---------------------------------------------------------");

const pool = require("../controller/db")


var toDoDb={
    
    getToDos: function (callback) {
        console.log("function CALLED---------")
        ;

     
        pool.query('SELECT * from todo', (err, result) => {
            if (err) {
              console.log(err);
              return callback(err.null);
          } else {
              console.log("its over HEREEEE")
              return callback(null, result);
          }
             // pool.end()
            })
    },
    

    

      getToDo: function (id,callback) {
        console.log("function CALLED---------")
   
        const sql = `SELECT * from todo where todo_id = $1`;
        const values = [id]
          pool.query(sql,values, (err, result) => {
            if (err) {
              console.log(err);
              return callback(err.null);
          } else {
              console.log("its over HEREEEE")
              return callback(null, result);
          }
             // pool.end()
            })
            
      },

      createToDo: function (todo, callback) {
        console.log(" create to do list  function called");
        console.log(" todo data = " + JSON.stringify(todo));
        var tododes = todo.description ;

        console.log(" todo description "+tododes)
       

        const sql = `INSERT INTO todo (description) VALUES($1)`;
        const values = [tododes]
        pool.query(sql, values,(err) => {
          if (err) {
            console.log(err);
            return callback(err);
        } else {
            return callback(null);
        }
    })
    },


    editToDo: function(todoID, todoDes,callback) {
      console.log(" edit reward by ID function called");
    
          const sql = `UPDATE todo set description=$2 where todo_id=$1`;
           const values = [todoID,todoDes]
          pool.query(sql,values,(err, result) => {
              if(err) {
                  console.log(err);
                  return callback(err.null);
              } else {
                  console.log("result : " + result.rows);
                  return callback(null,result.rows);
              }
          })
  },

  deleteToDo: function(todoid,callback) {
    console.log(" delete todo by ID function called");
  
        const sql = ` DELETE from todo where todo_id = $1;`;
         const values = [todoid]
        pool.query(sql,values,(err, result) => {
            if(err) {
                console.log(err);
                return callback(err.null);
            } else {
                return callback(null,result.rows);
            }
        })
}


}

module.exports = toDoDb;