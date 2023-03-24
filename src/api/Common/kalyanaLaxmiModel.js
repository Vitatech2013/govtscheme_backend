import mongoose from 'mongoose'

const kalyanalaxmiSchema = new mongoose.Schema({ 
    username: {
        type: String
    },   
    bridalname: {
        type: String
    },
    bridalfathername: {
        type: String
    },
    bridalmothername: {
        type: String
    },
    bridaldob: {
        type: String
    },
    bridalqualification:{
        type: String
    },
    bridalphoneno: {
        type: Number
    },
    bridalmotherphoneno: {
        type: Number
    },
    bridalaadharno: {
        type: String
    },
    bridalmotheraadharno: {
        type: String
    },
     bridalcaste: {
        type: String
    },
    bridalincomeno: {
        type: String
    },
    bridaltotallincome: {
        type: Number
    },
    bridalcasteno: {
        type: String
    },
    bridaldistrict: {
        type: String
    },
    bridalmondel: {
        type: String
    },
    bridalvillage: {
        type: String
    },
    holdername: {
        type: String
    },
    bridalmotheraccno: {
        type: String
    },
    bankdistrict: {
        type: String
    },
    bankname: {
        type: String
    },
    branchname: {
        type: String
    },
    bridalgroomname: {
        type: String
    },
    bridalgroomfathername: {
        type: String
    },
    bridalgroommothername: {
        type: String
    },
    bridalgroomdob: {
        type: String
    },
    bridalgroomqualification: {
        type: String
    },
    bridalgroomphone: {
        type: String
    },
    bridalgroomaadharno: {
        type: String
    },
    bridalgroomafatheradharno: {
        type: String
    },
    bridalgroomcaste: {
        type: String
    },
    bridalgroomdistrict: {
        type: String
    },
    bridalgroommandel: {
        type: String
    },
    bridalgroomvillage: {
        type: String
    },
    marriagedate: {
        type: String
    },
    marriageplace: {
        type: String
    },
    marriageaddress: {
        type: String
    },
    marriagecard: {
        type: String
    },
    bridalphoto: {
        type: String
    },
    aadharcopy: {
        type: String
    },
    passbook: {
        type: String
    },
    castecertificate: {
        type: String
    },
    status:{
        type: String
    }
},
    {
        timestamps: true
    });

const KalyanalaxmiModel = mongoose.model('kalyanalaxmischemes', kalyanalaxmiSchema)

export default KalyanalaxmiModel