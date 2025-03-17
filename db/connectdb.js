import mongoose from "mongoose";

export const connectdb = async ()=>{
    try{
        await mongoose
        .connect("mongodb+srv://Ajayrathod:Ajay&&12345@ajayrathod.fs4b7.mongodb.net//student_information")
        console.log("database is connected")
    }
    catch (err){
        console.log("connection failed",err)
        process.exit(1)

    }
} 