import express from "express"
import routes from "./router/student.js"
import { connectdb } from "./db/connectdb.js"
let app=express()
app.use(express.json())
app.use("/student",routes)

connectdb().then (()=>{
    app.listen(4001,()=>console.log("server started at  4001"))
}).catch(err=>{ 
    console.log("error",err)
})