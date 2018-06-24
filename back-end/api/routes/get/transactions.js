"use strict";



const router = require('express').Router();
const sql = require('../../db/db-connection');
const jwt = require('jwt-simple');
const secretKey = require('../../js/secretKey').secretKey;

module.exports = (function() {

    router.get('/', function(req, res) {
     //   let token = req.headers['X-Requested-With'];

      //  let auth;

      //  try{
       //     auth = jwt.decode(token, secretKey);
        //    console.log(auth);
        //    if(auth.employee){
                sql.query`SELECT * FROM Transactions`.then(recordset => {
                    res.json(recordset);
                }).catch(err => {
                    res.status(404).send();
                });
     //       }else{
       //         res.status(401).send();
         //   }
       // }catch(err){
         //   res.status(401).send();
      //  }


    });
    return router;
})();