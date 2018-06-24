"use strict";

const router = require('express').Router();
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const secretKey = require('../../js/secretKey').secretKey;
const sql = require('../../db/db-connection');

module.exports = (function() {

    router.post('/', function(req, res) {
        //    let token = req.headers['x-auth'];
        //    let auth;

        //   try{
        //      auth = jwt.decode(token, secretKey);
        //     if(auth.employee){
        let c_username = req.body.c_username;
        let e_username = req.body.e_username;
        let dataStart = req.body.data_start;

        let request = new sql.Request();//end save in database
        request.query(`INSERT INTO Transactions (customer_id, employee_id, data_start) SELECT customer_id, employee_id, '${dataStart}' FROM Customer, Employee where Customer.username = '${c_username}' and Employee.username = '${e_username}'`).then(recordset => {
            res.status(201).send();//if everything goes right, return 201 status code
            //        }).catch(err => {
            //            res.status(400).send();//else bad request code
        });

        //   }else{
        //        res.status(401).send();
        //   }
        //  }catch(err){
        //     res.status(401).send();
        //   }
    });
    return router;
})();

