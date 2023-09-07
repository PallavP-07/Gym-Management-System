
const userModel = require('../../Schema/User/userModel')
exports.userRegister = async (req, res) => {

    try {
        const { title, name, email, age, dob, documents, address, phone, img, gender } = req.body
        if (!title || !name || !email || !age || !dob || !documents || !address || !phone || !img || !gender) {
            return res.status(400).json({ message: "please fill the all required fields" });
        }
        const checkExistingUser = await userModel.findOne({ email })
        if (checkExistingUser) {
            return res.status(200).json({
                success: true,
                message: "user already registered with this mail id please login."
            })
        }
        const addUser = await new userModel({ title, name, email, age, dob, documents, address, phone, img, gender }).save()

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

exports.updateUsers = async (req, res) => {
    const id = req.params.id
    try {
        const data = await userModel.findByIdAndUpdate({ _id: id }, req.body, {
            new: true
        })
        if (data) {
            res.status(200).json({ success: true, message: "user data updated successfully..." });
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
exports.getUsers = async (req, res) => {
    try {
        const data = await userModel.find()
        if (data) {
            res.status(200).json({ success: true, message: "All users fetch successfully..." });
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

exports.getUserById = async (req, res) => {
    const id = req.params.id
    try {
        const data = await userModel.findByIdAndUpdate({ _id: id })
        if (data) {
            res.status(200).json({ success: true, message: "single user fetch  successfully..." });
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
exports.getUserByIdDelete = async (req, res) => {
    const id = req.params.id
    try {
        const data = await userModel.findByIdAndDelete({ _id: id })
        if (data) {
            res.status(200).json({ success: true, message: "user Deleted  successfully..." });
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}