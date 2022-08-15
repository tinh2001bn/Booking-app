const express = require("express");
const route =require('./routes')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const ConnectDb = require('./Config/Db')
      ConnectDb();
// body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
 }));

 // route init
 route(app);
const PORT = process.env.Port ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));