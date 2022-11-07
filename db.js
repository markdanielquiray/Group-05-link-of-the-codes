var mysql = require('mysql');

var connection = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'cpe202_cpe21s1',
 });

connection.connect(function(error){
if(!!error){
console.log(error);
}else{
console.log("MySQL Database Connected Successfully.");
}
});

 module.exports = connection;
