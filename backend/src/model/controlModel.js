
const db = require("../config/db");

const Control = {
  
  acquire: (userId, callback) => {
    db.query("UPDATE control SET user_id = ?, acquired_at = NOW() WHERE id = 1", [userId], (err, result) => {
      if (err) return callback(err);
      if (result.affectedRows === 0) {  
        db.query("INSERT INTO control (id, user_id, acquired_at) VALUES (1, ?, NOW())", [userId], callback);
      } else {
        callback(null, result);
      }
    });
  },

  release: (callback) => {
    db.query("UPDATE control SET user_id = NULL WHERE id = 1", callback);
  },

  getStatus: (callback) => {
    db.query("SELECT * FROM control WHERE id = 1 LIMIT 1", (err, result) => {
      if (err) return callback(err, []);
      return callback(null, result.length ? result : []);
    });
  },

  autoRelease: () => {
    db.query(
      "UPDATE control SET user_id = NULL WHERE acquired_at < NOW() - INTERVAL 120 SECOND"
    );
  },
};

module.exports = Control;
