const express = require('express');
const request = require('request');
const router = express.Router();


const url = 'http://api.system3.cpd.test.scrmtech.com';
const source = 100;
const secret = '';
const appid = '';
var catid = "";
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
router.use(bodyParser.json())
 
router.get('/', (req, res)=>{ res.render('addnewtag')});


router.post('/addTag', (req, res)=>{

const tag_name = req.body.tagName;
var options = {
    
    uri: url + '/app-api/user/setTag?catid=' + catid + '&tag_name=' + tag_name + '&source=' + source + '&secret=' +secret + '&appid=' + appid,
    method: 'POST'}

    addNewTag = new Promise( (resolve, reject) => {

    request( options, (error, response, body)=>{
        console.log(response.statusCode);
        if(response.statusCode==200) resolve(JSON.parse(body));
        else reject('False');
    });    
        
    })

    addNewTag.then( (fromResolve)=>{res.send(fromResolve)} ).catch((fromReject)=>{
        res.send(fromReject);
    //res.send('Add New Tag');
});


});

module.exports = router;