import mongoose from "mongoose";

export const connectDB=async() =>{
    await mongoose.connect('mongodb+srv://greateStack:dKJvb2zYWE4QTWY8@cluster0.jjdca.mongodb.net/Foodelivery').then(()=>console.log("DB Connected"))
}