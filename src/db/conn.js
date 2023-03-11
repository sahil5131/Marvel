const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pkum4656:<password>@marvel.4abxzxu.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection is sucessful`);
}).catch((e)=>{
    console.log("no connection");
})

