const express = require("express");
const multer = require("multer");
const upload = multer({dest:"./userfiles"})
const app = express();
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+ "/formBasic.html")
})
app.post("/",upload.single("rfile"),(req,res)=>
{
    console.log(req.file);
    res.send("file uploaded ");
})
app.get("/random",(req,res)=>
{
    // let r = Date.now();
    let r = Math.floor(Math.random() *1000);
    // let r = 32.423;    
    res.send("current value is " +r);
})
app.listen(3030,()=>console.log("server running on 3030"))