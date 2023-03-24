import mongoose from 'mongoose'

const addSchemesSchema = new mongoose.Schema({    
    schemename: {
        type: String
    },
    startdate: {
        type: String
    },
    enddate: {
        type: String
    },
    castetype: {
        type: String
    },
    requireddocuments: {
        type: String
    },
    aboutscheme: {
        type: String
    }
},
    {
        timestamps: true
    });

const AddSchemesModel = mongoose.model('addschemes', addSchemesSchema)

export default AddSchemesModel