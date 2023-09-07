const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,

    },
    userName:{
        type:String,
        require:true,

    },
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
        default:2
    },
}, { timestamps: true })

module.exports = mongoose.model('Trainers', trainerSchema);