const Schema = require("../model/dataSchema");

let subjectService ={
    saveData:saveData
}

function saveData(){
    let data = [
        {
            id: '1',
            name: "Communicative -2012 Set 1",
            pdfLink: 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
        },
        {
            id: '2',
            name: "Communicative -2012 Set 2",
            pdfLink: 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
        }
    ]
    return new Promise((resolve , reject)=>{
        let subData = Object.assign({
            'id':1,
            'name':'English',
            'samplePaper':data
        });
        Schema.create(subData).then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        });
    });
}

module.exports = subjectService;