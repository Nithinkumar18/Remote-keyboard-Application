
const Control = require("../model/controlModel");

exports.acquireControl = (req, res) => {
  const user = parseInt(req.query.user);

  Control.getStatus((err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (!result || result.length === 0) {
      return Control.acquire(user, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: `User ${user} acquired control.` });
      });
    }

    if (result[0].user_id && result[0].user_id !== user) {
      return res.status(403).json({ message: "Another user already has control" });
    }

    Control.acquire(user, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: `User ${user} acquired control.` });
    });
  });
};

exports.releaseControl = (req, res) => {
  Control.release((err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Control released." });
  });
};
exports.getControlStatus = (req, res) => {
    Control.getStatus((err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!result || result.length === 0) return res.status(404).json({ message: "No control record found." });
  
      res.json({ user_id: result[0].user_id });
    });
  };
  
