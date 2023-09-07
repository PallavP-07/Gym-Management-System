let  express= require('express');
let app =express()
var colors = require('colors');
let dotenv =require('dotenv')
let {connectDB} =require('./DB/dbConnection')
const authRoute =require('./Router/authRouter')
const PORT =process.env.PORT || 4000;

dotenv.config()
app.use(express.json())

///database connection///
connectDB()
///database connection end///

app.use('/api/v1/auth',authRoute)
app.get('/',(req,res)=>{
    res.send("<h1>Wellcome to Ecommerce Site</h1>");

});

app.listen(PORT,()=>{
    console.log(`Our Server is Running on:${PORT}`.bgMagenta.white);
})
