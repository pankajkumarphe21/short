import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import connect from "./db/connect.js";
import urlModel from './models/url.js'

dotenv.config();
connect();

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/:id',async(req,res)=>{
    const url=await urlModel.findById(req.params.id);
    return res.redirect(url.originalUrl);
});
app.post('/',async(req,res)=>{
    const url=await urlModel.create({originalUrl:req.body.url});
    url.passiveUrl=process.env.BASE_URL+url._id
    await url.save();
    return res.status(200).json({url:url.passiveUrl});
})

app.listen(process.env.PORT);