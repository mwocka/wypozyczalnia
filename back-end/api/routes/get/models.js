"use strict";


const router = require('express').Router();
const sql = require('../../db/db-connection');

module.exports = (function() {

    router.get('/', function(req, res) {
        sql.query`SELECT model_id, name, description, price_per_hour, category_id FROM Model`.then(recordset => {
            res.json(recordset);
        }).catch(err => {
            res.status(404).send();
        });
    });

    return router;
})();