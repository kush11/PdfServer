const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SamplePaperSchema = new Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
    },
    pdfLink:{
        type:String
    }
});

const SubjectSchema = new Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
    },
    samplePaper:[
        SamplePaperSchema    
    ]
});

const DefaultSchema = mongoose.model('Subject',SubjectSchema);

module.exports = DefaultSchema;