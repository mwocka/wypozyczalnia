/**
 * Created by Mateusz on 02.05.2017.
 */
const router = require('express').Router();
const sql = require('../../db/db-connection');

module.exports = (function() {

    router.get('/', function(req, res) {
        sql.query`  SELECT * FROM Reservation INNER JOIN Customer ON Reservation.customer_id=Customer.customer_id`.then(recordset => {
            res.json(recordset);
        }).catch(err => {
            res.status(404).send();
        });
    });

    return router;
})();