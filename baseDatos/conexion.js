const mysql = require('mysql2/promise');

const conexion = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    database: 'biblioteca',
    password:'Dell.2022',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = conexion;