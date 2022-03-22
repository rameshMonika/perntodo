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
    

    getStudentProcessByID: function (id,callback) {
        console.log("function CALLED---------")
   
        const sql = `SELECT "public"."Student"."name","public"."Student"."streaks","public"."Student"."totalPts","public"."Student"."mazeLvl" FROM "public"."Student" WHERE "studentID"=$1;`;
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

}

module.exports = toDoDb;