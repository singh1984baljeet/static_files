const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;


//Setting up the view engine 
app.set("views", "./views");
app.set("view engine", "ejs");

//Middleware to expose static files to app
app.use(express.static("public/images"));

//Route handler
app.get("/", (req, res) =>{
    res.render("home");
})



//Running server on port
app.listen(PORT, ()  =>{
    console.log(`Connected to port  ${PORT}`);
})