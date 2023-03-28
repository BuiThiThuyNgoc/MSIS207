const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./my-app/public/routes/author");

dotenv.config();
//CONNECT DATABASE
mongoose.connect((process.env.MONGODB_URL), ()=> {
    console.log("Connected to MogoDB");
});


app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/author", authorRoute);
// app.use("/", (req,res)=>{
//     res.send('hello');
// });

const port = 3000;
app.listen(port, () => {
    console.log("Server is running... http://127.0.0.1:%d",port);
});