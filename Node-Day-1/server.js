// const math = require("./math");
// console.log(math);
// console.log(math.add(5,3));
// console.log(math.substract(8,3));

const express = require("express")
const app = express()
// console.log(app);
app.get("/",(req,res)=>{
    // console.log(req,request);
    // console.log(res,request);
    res.send("this is home page")
})
app.get("/about",(req,res)=>{
    // console.log(req,request);
    // console.log(res,request);
    res.send("this is about page")
})
app.get("/contact",(req,res)=>{
    // console.log(req,request);
    // console.log(res,request);
    res.send("this is contact page")
})
app.get("/html",(req,res)=>{
    res.send(
        `<html>
        <head></head>
        <body>
            <h1>this is a html page</h1>
            <button>click</button>
        </body>
    </html>`)
})
app.listen(3100,()=>{
    console.log("server is running in 3100")
})
