import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection is sucessful`);
}).catch((e)=>{
    console.log("no connection");
})

export default mongoose;

