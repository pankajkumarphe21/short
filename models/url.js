import mongoose from "mongoose";

const urlSchema=new mongoose.Schema({
    originalUrl:{
        type:String,
        unique:true,
        required:true,
    },
    passiveUrl:{
        type:String,
        unique:true,
    },
})

const Url=mongoose.model('url',urlSchema);

export default Url;