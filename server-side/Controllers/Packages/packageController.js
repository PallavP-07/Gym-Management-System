
const packageModel = require('../../Schema/SubscriptionPackage/packageModel')

exports.addPackages = async (req, res) => {

    try {
        const { packageType, amount, trainingType } = req.body
        if (!packageType || !amount || !trainingType) {
            return res.status(400).json({ message: "please fill the all required fields" });
        }
        const checkExistingpackage = await packageModel.findOne({ packageType })
        if (checkExistingpackage) {
            return res.status(200).json({
                success: true,
                message: "package already registered with this mail id please login."
            })
        }
        const addPackage = await new packageModel({ packageType, amount, trainingType }).save()

        res.status(201).json({
            success: true,
            message: 'new package registered successfully....',
            addPackage
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
}



exports.getPackages = async (req, res) => {
    try {
        const data = await packageModel.find()
        if (data) {
            res.status(200).json({ success: true, message: "All packages fetch successfully..." });
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

exports.getPackageById = async (req, res) => {
    const id = req.params.id
    try {
        const data = await packageModel.findByIdAndUpdate({ _id: id })
        if (data) {
            res.status(200).json({ success: true, message: "single package fetch  successfully..." });
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
exports.getPackagerByIdDelete = async (req, res) => {
    const id = req.params.id
    try {
        const data = await packageModel.findByIdAndDelete({ _id: id })
        if (data) {
            res.status(200).json({ success: true, message: "package Deleted  successfully..." });
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}