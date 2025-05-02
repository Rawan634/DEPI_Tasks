// Load Environment Variables 
require('dotenv').config()

// Grap Application Dependencies 
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressEjsLayout  = require('express-ejs-layouts')
const port = process.env.PORT;

// Static Middleware
// app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));
// Set View Engine
app.set('view engine' , 'ejs')
app.use(expressEjsLayout)

// Database Connection 
mongoose.connect(process.env.DB_URI)
const db = mongoose.connection
if(db) {console.log("Connection Success")}

app.use(express.urlencoded({extended : false}))
app.use(express.json())

// Set Application Routes 
app.use(require('./routes/web'))
app.use("/api/v1" , require('./routes/api'))
// Running Application Server
app.listen(port , () => {
    console.log(`Server Running on localhost:${port}`)
})