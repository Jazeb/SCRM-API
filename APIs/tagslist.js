const express = require('express');
const fs = require('fs');
const request = require('request');
const router = express.Router();


const URL = 'http://api.system3.cpd.test.scrmtech.com';
const source = 100;
const secret = '';
const appid = '';


router.get('/', (req, res) => {

    getTagsList = new Promise(function(resolve, reject){
        request(URL + '/app-api/user/getMainTag?source=' + source + '&secret=' + secret + '&appid=' + appid, function(error, response, body){

            console.log(response.statusCode);
            if(response.statusCode==200) resolve(JSON.parse(body));
            else reject('not connected');
        }).pipe(fs.createWriteStream('./response/tagslist.json'));
    })

    getTagsList.then(function(fromResolve){
        res.json(fromResolve);
    }).catch(function(fromReject){
        res.send(fromReject);
    })
    
    
});

module.exports = router;