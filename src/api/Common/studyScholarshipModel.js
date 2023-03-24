import mongoose from 'mongoose'

const studySchema = new mongoose.Schema({
    username: {
        type: String
    },
    studentname: {
        type: String
    },
    fathername: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    },
    phoneno: {
        type: Number
    },
    aadharno: {
        type: String
    },
     ssctype: {
        type: String
    },
    hallticket: {
        type: Number
    },
    passyear: {
        type: String
    },
    universityname: {
        type: String
    },
    collegename: {
        type: String
    },
    course: {
        type: String
    },
    bankname: {
        type: String
    },
    branchname: {
        type: String
    },
    accountno: {
        type: String
    },
    address: {
        type: String
    },
    aadharcopy: {
        type: String
    },
    passbook: {
        type: String
    },
    castecertificte: {
        type: String
    },
    status:{
        type: String
    }
},
    {
        timestamps: true
    });

const StudyModel = mongoose.model('scholorshipsschemes', studySchema)

export default StudyModel