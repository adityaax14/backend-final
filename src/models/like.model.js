import mongoose from "mongoose";

const likeSchema= new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    video:{
        type:Schema.Types.ObjectId,
        ref:"Video"
    },
    comment:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    }
},{timestamps:true})

export const Like= mongoose.model("Like",likeSchema)  