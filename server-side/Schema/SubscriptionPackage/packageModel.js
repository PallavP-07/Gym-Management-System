const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    packageType: {
        type: String,
        require: true,

    },
    amount: {
        type: Number,
        require: true,

    },
    trainingType: {
        type: String,
        require: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('packages', PackageSchema);