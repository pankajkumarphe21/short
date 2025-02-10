import mongoose from "mongoose";

async function connect(){
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        // console.log('connected');
    })
}

export default connect;