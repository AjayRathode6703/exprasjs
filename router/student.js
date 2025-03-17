import express from "express"
import { Studentmodel } from "../db/student.model.js"
let routes=express.Router()



routes.route("/")
.get(async (req,res)=>{
    let studentdata=await Studentmodel.find()
    if(studentdata){
        res.json(studentdata)
    }
    else{
        res.status(402).send("not found")
    }

})
.post((req,res)=>{
    let studentmodel=new Studentmodel(req.body)
    studentmodel.save()
    .then((value)=>{
        res.send("data added")
    }).catch(err=>{
       res.status(500).send("save op is failed")
    })
   
   
})
routes.route("/:id")
.get((req,res)=>{
    let id=req.params.id
    let found=student.find((value)=>value.id==id)
    res.json(found)

})
.put((req,res)=>{
    let id=req.params.id
    let index=student.findIndex((value)=>value.id == id)
    student[index]=req.body
    res.json(student[index])
})
.delete((req,res)=>{
    let id=req.params.id
    let index=student.findIndex((value)=>value.id==id)
    student.splice(index,1)
    res.json(student) 
})
export default routes