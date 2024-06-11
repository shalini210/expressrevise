const express = require("express")
const router = express.Router();
// localhost:3030/admin

var admins = [{"username":"Admin1","pwd":"123"},
    {"username":"Admin2","pwd":"1234"},
    {"username":"Admin3","pwd":"12345"}]

router.get("/",(req,res)=> {
    
    res.send(admins);
})
router.post("/login",(req,res)=>
{
    console.log(req.body);
    let chk = admins.find((a)=> a.username=== req.body.uname && a.pwd===req.body.pwd )
    console.log(chk)
    if(chk != undefined)
    {
    res.send("success")
    }
    else
    {
        res.send("fail")
    }
})
module.exports= router;