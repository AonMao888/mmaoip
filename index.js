const express = require("express");
const address = require("address");
const app = express();

app.get("/",(req,res)=>{
    var data={
        "ip":address.ip(),
        "ipv6":address.ipv6()
    }
    res.send(data);
})

app.listen(80,()=>{
    console.log("server started with port 80");
})