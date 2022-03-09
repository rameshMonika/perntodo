
const {databaseUserName, databaseHost, database, databasePassword, databasePort} = require('../databaseConfig')



const Pool =require("pg").Pool;

const pool=new Pool(
   {
       user :databaseUserName,
       password:databasePassword,
       host:databaseHost,
       port:databasePort,
       database:database
   }
);

module.exports=pool;


// user :"postgres",
// password:"akinom1811",
// host:"localhost",
// port:5432,
// database:'perntodo'