import dotenv from "dotenv";
dotenv.config(); // MUST be first
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import { app } from "./app.js";



;(async ()=>{
  try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("errror",(error)=>{
      console.log("ERRR",error);
      throw error
    })
    app.listen(process.env.PORT,()=>{
      console.log('App is listening on port', process.env.PORT);
    })
  }
  catch (error){
    console.error("ERROR",error);
    throw error

  }
})()