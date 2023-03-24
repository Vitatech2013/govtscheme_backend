import mongoose from 'mongoose'

const housingSchema = new mongoose.Schema({
    username: {
        type: String
    },    
    name: {
        type: String
    },
    gender: {
        type: String
    },
    age:{
        type: Number
    },
    phoneno: {
        type: Number
    },
    aadharno: {
        type: Number
    },
    occupation: {
        type: String
    },
    religion: {
        type: String
    },
    caste: {
        type: String
    },
    residenttype: {
        type: String
    },
    address: {
        type: String
    },
    castecertificate:{
        type: String
    },
    rationcard: {
        type: String
    },
    status:{
        type: String
    }
},
    {
        timestamps: true
    });

const HousingModel = mongoose.model('housingschemes', housingSchema)

export default HousingModel