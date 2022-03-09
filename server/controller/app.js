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
