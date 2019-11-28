var express = require('express');
var routerProduct=require('./routes/employee');
var bodyparser=require('body-parser');
const app=express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyparser.json());

app.use("/emp",routerProduct);

app.get("/",(request,response)=>{
    response.send("welcome to backend");
})
app.listen(9898,'0.0.0.0',()=>{
    console.log("server started on port 9898");
})



