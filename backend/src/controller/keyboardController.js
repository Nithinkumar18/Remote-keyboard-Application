const Keyboard = require("../model/keyboardModel");

exports.getKeyboardState = (req, res) => {
  Keyboard.getAll((err, results) => {
    if (err) {
        throw err;
    }
    res.json(results);
  });
};

exports.toggleKey = (req, res) => {
  const { user, key } = req.query;
  Keyboard.toggleKey(parseInt(user), parseInt(key), (err) => { 
    if (err) {
      res.status(403).json({ error: err.message }); 
    } else {
      res.json({ message: `Key ${key} updated.` });
    }
  });
};