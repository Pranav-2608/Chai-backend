import express from "express"
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

const app = express();

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at PORT NO. ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.log("MONGODB connection failed !!!",error);
});









/*
(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("error",(error)=>{
         console.log("error");
         throw error;
       })

       app.listen(process.env.PORT,()=>{
          console.log(`App is listening on ${process.env.PORT}`)
       })
    }
    catch(error){
        console.error("Error:",error);
        throw error;
    }
})()
*/