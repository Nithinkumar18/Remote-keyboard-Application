const mysql = require('mysql');

const mydb = mysql.createConnection({
    host: "localhost",
    user: "",     // add user
    password: "", // add your password
    database: "remote_keyboard_game"
});


mydb.connect((err) => {
    if(err){
        throw err;
    }
    console.log("connected to db");
})

module.exports = mydb;