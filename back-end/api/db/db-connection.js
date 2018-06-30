"use strict";


const sql = require('mssql');

const config = {
    user: 'api2',
    password: 'Passw0rd!',
    server: 'localhost',
    database: 'DB_projekt',
    options: {
        encrypt: false//if Windows Azure
    }
}

sql.connect(config).catch(function(err) {
    console.error(err);//connection error checks
});

module.exports = sql;