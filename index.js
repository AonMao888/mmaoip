const express = require("express");
const address = require("address");
const app = express();

app.get("/",(req,res)=>{
    res.send({
        "ip":address.ip(),
        "ipv6":address.ipv6()
    });
})

app.listen(80,()=>{
    console.log("server started with port 80");
})