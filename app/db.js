const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root12',
    database: 'phpdasar'
})

connection.connect((err)=>{
    if(err){
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MYSQL server');
})

module.exports = connection;