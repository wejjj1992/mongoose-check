const mongoose=require('mongoose')
const config=require('config')
const connectDB=()=>{
    mongoose.connect(config.get("MONGOURI"),{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>console.log("mongoose Connected"))
    .catch(()=>console.log("error DB"))

}
module.exports=connectDB