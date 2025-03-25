const db = require('../config/db');

const User = {
    create: (userId, callback) => {
        db.query("INSERT INTO users (user_id) VALUES (?)", [userId], callback);
    },
    getById: (userId, callback) => {
        db.query("SELECT * FROM users WHERE user_id = ?", [userId], callback);
      }
    };
    
    module.exports = User;