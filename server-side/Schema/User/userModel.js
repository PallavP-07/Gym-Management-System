const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,

    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    gender: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true

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
    img: {
        type: String,
        required: true,
    },
    documents: {
        type: String,
        require: true
    },
    membership: {
        type: Object,
        default: {
            membership: {
                type: String,
                default: ""
            },
            startDate: {
                type: String,
            },
            endDate: {
                type: String,
            },
            personalTrainier: {
                type: String,
                default: ""
            }

        }
    }

}, { timestamps: true },
)

module.exports = mongoose.model('Users', UserSchema);