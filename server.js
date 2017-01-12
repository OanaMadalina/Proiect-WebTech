'use strict'
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
let app=express()
app.use(express.static(_dirname +'/app'))
app.get('/hello',(req,res)=>{
    res.status(200).send({Message:"salutare"})
})
app.listen(8080)
