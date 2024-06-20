const mongoose = require('mongoose')
const Schema = mongoose.Schema


mongoose.connect('mongodb+srv://harsha1234:Sm93YBjSzh9Uu1BH@cluster0.dqj69kc.mongodb.net/Paytm/')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type:String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength:50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength:50
    }
})

const accountSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("User", userSchema)
const Account = mongoose.model("Account", accountSchema)

module.exports = {
    User,
    Account
}
