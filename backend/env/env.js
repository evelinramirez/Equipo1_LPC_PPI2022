const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'brzjrlx4hbgf9ksiflec-mysql.services.clever-cloud.com',
    user: 'usxi5ehuldwky4bl',
    password: 'LRJCvrWjegK1GqMzM3TB',
    database: 'brzjrlx4hbgf9ksiflec',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;