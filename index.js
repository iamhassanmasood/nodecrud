const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const connection = mongoose.connection;
const dotenv = require('dotenv')
dotenv.config()

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true});

connection.once("open", function () {
    console.log("mongodb database connected");
});

const usersRouter = require('./routes/user');
app.use('/api', usersRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});
