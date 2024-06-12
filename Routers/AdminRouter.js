const express = require("express")
const router = express.Router();
const AdminController = require("../controllers/Admincontroller")

router.get("/",(req,res)=> {
    
    res.sendFile(__dirname+"/adminlogin.html");
})
router.post("/login",(req,res)=>
{
    console.log(req.body);
    let x= AdminController.chkadmin(req.body.uname,req.body.pwd);
    res.send(x);
})
router.get("/AddAdmin",(req,res)=>
{
    res.sendFile(__dirname+"/AddAdmin.html");
})

router.post("/AddAdmin",(req,res)=>
{
   const adms= AdminController.addAdmin(req.body.uname,req.body.pwd);
    res.send(adms)
})

module.exports= router;