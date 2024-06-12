const Adminmodel = require("../models/Adminmodel")
const Admins = Adminmodel.admins;

exports.chkadmin=(uname,pwd)=>
{
    let chk = Admins.find((a)=> a.username===uname && a.pwd===pwd )
    console.log(chk)
    if(chk != undefined)
    {
    return "success"
    }
    else
    {
     return "fail";
    }
}
exports.addAdmin=(uname,pwd)=>
{
    var adm =  {"username":uname,"pwd":pwd};
    console.log(Admins.push(adm));
    return Admins;
}