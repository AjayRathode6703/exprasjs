import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema({
    name:"string",
    surname:"string",
    rollno:Number,
},{timestamps:true})
export const Studentmodel=mongoose.model("Studentmodel",StudentSchema)