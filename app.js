const express = require("express")
const app = express();
const adminRouter = require("./Routers/AdminRouter")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/admin",adminRouter);


app.get("/",(req,res)=>
{   
    res.send("welcome to Express")
})
app.post("/",(req,res)=>
{   
    res.send("post method ");
})
app.put("/",(req,res)=>
{
    res.send("put method ");
})

app.delete("/",(req,res)=>
{
    console.log(req.query.id)
    res.send("record for user with id  " + req.query.id +" will delete");;
})

app.get("/add",(req,res)=>
{
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    c = a+b;
    res.send(c);
})
app.listen(3030,()=>console.log("server running on 3030"));

