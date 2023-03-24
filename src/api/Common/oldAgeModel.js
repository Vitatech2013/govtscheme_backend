import mongoose from 'mongoose'

const oldageSchema = new mongoose.Schema({
    username: {
        type: String
    },
    name: {
        type: String
    },
    fathername: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    age:{
        type: Number
    },
    phoneno: {
        type: Number
    },
    aadharno: {
        type: String
    },
     occupation: {
        type: String
    },
    accholdername: {
        type: String
    },
    accountno: {
        type: Number
    },
    bankname: {
        type: String
    },
    branchname: {
        type: String
    },
    address: {
        type: String
    },
    photo: {
        type: String
    },
    birthcertificate:{
        type: String
    },
    passbook: {
        type: String
    },
    voterid: {
        type: String
    },
    status:{
        type: String
    }
},
    {
        timestamps: true
    });

const OldageModel = mongoose.model('oldageschemes', oldageSchema)

export default OldageModel