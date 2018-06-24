/**
 * Created by Mateusz on 03.05.2017.
 */
"use strict";


const router = require('express').Router();
const sql = require('../../db/db-connection');

module.exports = (function() {

    router.get('/', function(req, res) {
        sql.query` SELECT  Model.name, Model.price_per_hour, Item.item_id, Item.condition, Item.itemstatus FROM Item INNER JOIN Model ON Model.model_id=Item.model_id`.then(recordset => {
            res.json(recordset);
        }).catch(err => {
            res.status(404).send();
        });
    });
    return router;
})();
