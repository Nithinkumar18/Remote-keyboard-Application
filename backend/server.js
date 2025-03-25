const express = require('express');
const cors = require('cors');
const keyboardRoutes = require("./src/routes/releaseRoutes");
const controlRoutes = require("./src/routes/controlRoutes");
const Control = require('./src/model/controlModel');


const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.use("/keyboard", keyboardRoutes);  
app.use("/control", controlRoutes);


setInterval(() => {
    Control.autoRelease();
  }, 30000); 

app.listen(PORT,() => {
    console.log(`App running on PORT: ${PORT}`);
})
