import mongoose from 'mongoose'

const userDetailsSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    fathername: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    mobileno: {
        type: String
    },
    Emailid:{
        type: String
    },
    aadharno:{
        type: String
    },
    occupation:{
        type: String
    },
    state:{
        type: String
    },
    address:{
        type: String
    }
},
    {
        timestamps: true
    });

const UsersModel = mongoose.model('users', userDetailsSchema)

export default UsersModel