
const db = require("../config/db");
const Control = require("./controlModel");

const Keyboard = {
  getAll: (callback) => {
    db.query("SELECT * FROM keyboard", callback);
  },

  toggleKey: (userId, keyNumber, callback) => {
    Control.getStatus((err, result) => {
      if (err) return callback(err);

      if (!result || result.length === 0) {
        return callback(new Error("No control record found."));
      }

      if (result[0].user_id == null) {
        return callback(new Error("Control is not acquired. Please acquire control first."));
      }

      if (parseInt(result[0].user_id) !== parseInt(userId)) {
        return callback(new Error("You do not have control"));
      }

      
      db.query("SELECT state FROM keyboard WHERE key_number = ?", [keyNumber], (err, keyResult) => {
        if (err) return callback(err);

        let keyState = keyResult[0].state;
        let keyOwner = keyState.replace("user", "");  

        if (keyState !== "off" && keyOwner !== String(userId)) {
          return callback(new Error("You cannot change another user's key!"));
        }

        let newState = keyState === "off" ? `user${userId}` : "off";

        db.query("UPDATE keyboard SET state = ? WHERE key_number = ?", [newState, keyNumber], callback);
      });
    });
  },
};

module.exports = Keyboard;

