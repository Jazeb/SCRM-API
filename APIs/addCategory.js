const express = require('express');
const request = require('request');
const router = express.Router();


const url = 'http://api.testbiz.social-touch.com';
const source = '';
const secret = '';
const appid = '';

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
router.use(bodyParser.json())
 
router.get('/', (req, res)=>{ res.render('addnewcate')});


router.post('/addCate', (req, res)=>{

const cate_name = req.body.cateName;
var options = {
    
    uri: url + '/app-api/user/addTagCate?source='+ source + '&secret=' +secret + '&appid=' + appid + '&name='+cate_name,
    method: 'POST'}

    addNewTag = new Promise( (resolve, reject) => {

    request( options, (error, response, body)=>{
        console.log(response.statusCode);
        if(response.statusCode==200) resolve(JSON.parse(body));
        else reject('False');
    });    
        
    })

    addNewTag.then( (fromResolve)=>{res.send(fromResolve)}).catch((fromReject)=>{
        res.send(fromReject);
    //res.send('Add New Tag');
});


});

module.exports = router;