const express = require("express");

const router = express.Router();

var dbConn = require('../../config/db');

//Routes
//INSERT
router.post('/add', (req,res)=>{
    var admin_id = req.body.admin_id; 
    var name_id = req.body.name_id; 
    var contact = req.body.contact;
    var gender = req.body.gender; 
    var email_id = req.body.email_id; 
    var user_id = req.body.user_id; 

    sqlQuery = `INSERT INTO admin(admin_id, name_id, contact, gender, email_id, user_id) VALUES(${admin_id},"${name_id}","${contact}","${gender}","${email_id}","${user_id}")`; 

    dbConn.query(sqlQuery, function(error, results, fields){
        if(error)throw error;
        res.status(200).json(results);
    });
        

});
//VIEW
router.get('/view', (req, res) => {
    sqlQuery = `SELECT * FROM admin`;
    
    dbConn.query(sqlQuery, function( error, results, fields ){ 
    if (error) throw error;
    res.status(200).json(results);
    });  
});
//UPDATE
router.patch('/update/:admin_id',(req, res) => {
    console.log('API CONNECTION SUCCESS!');
    const admin_id = req.params.admin_id;
    dbConn.query(`SELECT admin_id FROM admin WHERE admin_id = ${admin_id}`, function(error, results, fields){
        if(error) throw error;
        else if (!results.length) {
            console.log("Unknown ID")
            res.status(400).json("Unknown ID");
            return;
        }
        else{ 
            var name_id = req.body.name_id; 
            var contact = req.body.contact;
            var gender = req.body.gender; 
            var email_id = req.body.email_id; 
            var user_id = req.body.user_id; 
            dbConn.query(`UPDATE admin SET name_id = '${name_id}', contact = '${contact}', gender = '${gender}', email_id = '${email_id}', user_id = '${user_id}' WHERE admin_id = ${admin_id}`, function(error, results, fields){
                console.log("Entry Updated");
                if (error) return;
                res.status(200).json(results);
            });
        }

    });
});
//DELETE
router.delete('/delete/:admin_id', (req,res)=> {
    console.log('API Running');
    const admin_id = req.params.admin_id;
    dbConn.query(`SELECT admin_id from admin WHERE admin_id = ${admin_id}`, function(error, results, fields){
        if (error) throw error;
        
        else if (!results.length) {
            console.log("ID does not exist")
            res.status(300).json("ID does not exist");
            return;
        }
        else{
            dbConn.query(`DELETE from admin WHERE admin_id = ${admin_id}`, function(error,results, fields){
                console.log("Data DELETED");
                if (error) return;
                res.status(300).json(results);
            });
        }
    });
});
module.exports = router;