const express = require('express');
const request = require('request');
const router = express.Router();


const url = 'http://api.system3.cpd.test.scrmtech.com';
const source = 100;
const secret = '';
const appid = '';

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
router.use(bodyParser.json())
 
router.get('/', (req, res)=>{ res.render('addnewpoints')});


router.post('/', (req, res)=>{

var options = {  
    
    uri: url + '/app-api/member/changePoints?openid='+req.body.oid + '&points='+req.body.points+'&content='+req.body.content+'&type='+req.body.type+'&flag='+req.body.flag+'&source=' + source + '&secret=' +secret + '&appid=' + appid,
    method: 'POST'}

    addNewPoint = new Promise( (resolve, reject) => {

    request( options, (error, response, body)=>{
        console.log(response.statusCode);
        if(response.statusCode==200) resolve(JSON.parse(body));
        else reject('False');
    });    
        
    })

    addNewPoint.then( (fromResolve)=>{res.send(fromResolve)} ).catch((fromReject)=>{
        res.send(fromReject);
    //res.send('Add New Tag');
});


});

module.exports = router;