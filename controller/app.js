console.log("---------------------------------------------------------");
console.log("perntodo> server> controller >app.js");
console.log("---------------------------------------------------------");

//-------------------------------------------------------------------------
//imports
//-------------------------------------------------------------------------
const express = require('express');

//Create an instance of express
const app = express();

const bodyParser = require('body-parser');

// var toDoList = require('../model/toDoList.js');


var cors = require('cors');


var urlencodedParser=bodyParser.urlencoded({extended:false});


var toDoList=require('../model/pernToDoList')


//-------------------------------------------------------------------------
// Middleware functions
//-------------------------------------------------------------------------

/** 
 * @param {object} req 
 *  request object
 * @param {object} res  
 *  response object 
 * @param {function} 
 *  reference to the enxt function to call
 * 
 */


function printDebugInfo(req, res, next) {
    console.log();
    console.log("-----------------[Debug Info]----------");
    //console.log(`Servicing ${urlPattern}...`);
    console.log("Servicing" + req.url + " ..");

    console.log("> req.params:" + JSON.stringify(req.params));
    console.log("> req.body:" + JSON.stringify(req.body));
    // console.log("> req.myOwnDebugIssue:"+JSON.stringify(req.myOwnDebugInfo));
    console.log("-----------------[Debug Info Ends]----------");
    console.log();

    next();

}

// from bodyParser, we want to get 2 different kinds of parsers
// who are capable of parsing some kind of data coming in
// 1.URL Encoded Parser
// 2.JSON Parser
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//-------------------------------------------------------------------------
// MF configurations
//-------------------------------------------------------------------------
app.use(urlEncodedParser);
app.use(jsonParser);

app.options('*',cors());
app.use(cors());




//-------------------------------------------------------------------------
//endpoints-user
//------------------------------------------------------------------------



// get alltodos
app.get('/alltodos', printDebugInfo,function (req, res) {

    toDoList.getToDos(function (err, result) {
        if (!err) {
            res.send(result.rows);
        }
        else {
            res.status(500).send("Some error");
        }
    });

});




// get a todo
app.get('/todos/:todoid', printDebugInfo,function (req, res) {
    var todoId=req.params.todoid;

    toDoList.getToDo(todoId,function (err, result) {
        if (!err) {
            res.send(result.rows);
        }
        else {
            res.status(500).send("Some error");
        }
    });

});



//  create to do

app.post('/todos', function(req,res) {

    var description=req.body
    var data = {
        description : req.body ,
      
    };

    console.log("post rewards function called.")
    console.log("post data : " + JSON.stringify(data));
    console.log("====================description====================================")
    console.log(description)
   console.log("======================================================================")

    toDoList.createToDo(description,function(err,result) {
        if(!err){
            res.status(201).send("");
        }else {
            res.status(500).send("Error ! Cannot post reward");
        }
    });
});


//edit to do


app.put('/todos/:todoid', function (req, res) {

    var todoID=req.params.todoid

    var todoDes = req.body.description ;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("todoID " + todoID);
    console.log("description " + todoDes);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    toDoList.editToDo(todoID, todoDes,function (err, result) {

        console.log("toDoList.editToDo IDcalled");
        if (!err) {
            res.send(result);
        } else {
            res.status(500).send("Error ! Cannot edit todo");
        }
    });
});


//delete todo

app.delete('/todos/:todoid', function (req, res) {
    var todoID=req.params.todoid;
 
   toDoList.deleteToDo(todoID,function (err, result) {
        console.log(" toDoList.deleteToDo called");
        if (!err) {
            res.send(result);
        } else {
            res.status(500).send("Error ! Cannot get reward");
        }
    });
})







//default endpoint
app.get('/', (req, res) => {
    console.log("GET > '/' > pern todo  Active");

    res.status(200).send({
        "Result": "GET > '/' > pern todo  Active"
        });
    res.end();
});


app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })

module.exports = app;
