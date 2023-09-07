const { hassedPassword, compPassword } = require('../../Helpers/authHelper');
const userModel = require('../../Schema/adminModel')
const JWT =require('jsonwebtoken')
exports.adminRegister = async (req, res) => {

    try {
        const { name, email, password, address, phone } = req.body
        if (!name || !email || !password || !address || !phone) {
            return res.status(400).json({ message: "please fill the all required fields" });
        }
        // if (amount < 0 || !amount === "Number") {
        //     return res.status(400).json({ message: 'amount must be a positive number' });
        // }
        const checkExistingUser = await userModel.findOne({ email })
        if (checkExistingUser) {
            return res.status(200).json({
                success: true,
                message: "user already registered with this mail id please login."
            })
        }
        const hashPassword = await hassedPassword(password)
        const addUser = await new userModel({ name, email, password: hashPassword, address, phone }).save()

        res.status(201).json({
            success: true,
            message: 'new user registered successfully....',
            addUser
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }


}

exports.adminLogin =async(req,res)=>{
    try{
        const{email,password}=req.body
        if ( !email || !password ) {
            return res.status(400).json({ message: "please fill the all required fields" });
        }
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({
            success:false,
            message:"user is not present",
        })
    }
        const match = await compPassword(password,user.password)
        if(!match){
            return res.status(404).json({
                success:false,
                message:"password not match!",
            })
        }
   const token =await JWT.sign({_id:user._id},process.env.JWT_KEY,{
    expiresIn:'1d',
   });
   res.status(200).json({
    success:true,
    message:"token generate Successfully...",
    token
   })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }

}


exports.testController =(req,res)=>{
    console.log("protected route")
}