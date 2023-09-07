let mongoose =require('mongoose');
let colors =require('colors')

const connectDB =async ()=>{

    try{
     const conn = await mongoose.connect(process.env.DB_CONNECTION)
     console.log(`MongoDB database connected successfully..... `.bgYellow.black);  
    }catch (error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}

module.exports= {connectDB};