const service = require("../services/services");

function init(router){
    callFunction();
    router.route('/data')    
    .post(callFunction);
}

function callFunction(req,res){
    // let data = req.body;
    service.saveData().then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(er);
    });
}

module.exports.init = init;