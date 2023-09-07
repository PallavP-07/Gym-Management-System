const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true

    },
    password:{
        type:String,
        require:true,
    },
    address: {
        type: String,
        require: true,
        trim: true
    },
    phone: {
        type: Number,
        require: true,
        maxLength: 11,
    },
    role:{
        type:Number,
        default:1
    }
}, { timestamps: true })

module.exports = mongoose.model('Admins', AdminSchema);