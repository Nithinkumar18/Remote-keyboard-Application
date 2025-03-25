const mysql = require('mysql');

const mydb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NithinKumar@00",
    database: "remote_keyboard_game"
});


mydb.connect((err) => {
    if(err){
        throw err;
    }
    console.log("connected to db");
})

module.exports = mydb;