var express = require('express');
var db=require('../db');
var router=express.Router();
const connection=db.connect();

router.get("/",(request,response)=>{
    const connection=db.connect();
    var querytext="select * from employee";
    connection.query(querytext,(err,data)=>{
        if(err==null)
        {
            response.send(JSON.stringify(data));
        }
        else{
            response.send(JSON.stringify(err));
        }
        
    })

})
router.post("/",(request,response)=>{
    const {id,name,address,email}=request.body;
    var querytext=`insert into employee values(${id},'${name}','${address}','${email}')`;
    connection.query(querytext,(err,data)=>{
        if(err==null)
        {
            response.send(JSON.stringify(data));
        }
        else{
            response.send(JSON.stringify(err));
        }
        
    })

})
router.put("/:id",(request,response)=>{
    const id=request.params.id;
    const {name,address}=request.body;
    var querytext=`update employee set name='${name}',address='${address}' where id=${id}`;
    connection.query(querytext,(err,data)=>{
        if(err==null)
        {
            response.send(JSON.stringify(data));
        }
        else{
            response.send(JSON.stringify(err));
        }
        
    })

})
router.delete("/:id",(request,response)=>{
    const id=request.params.id;
    
    var querytext=`delete from employee where id=${id}`;
    connection.query(querytext,(err,data)=>{
        if(err==null)
        {
            response.send(JSON.stringify(data));
        }
        else{
            response.send(JSON.stringify(err));
        }
        
    })

})
module.exports=router;