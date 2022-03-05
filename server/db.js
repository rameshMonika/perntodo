const Pool =require("pg").Pool;

const pool=new Pool(
   {
       user :"vmjybvhx",
       password:"sOCnaMOLZoix6Z8zzzVCaf2-sfjPICYd",
       host:"jelani.db.elephantsql.com",
       port:5432,
       database:'vmjybvhx'
   }
);

module.exports=pool;


// user :"postgres",
// password:"akinom1811",
// host:"localhost",
// port:5432,
// database:'perntodo'