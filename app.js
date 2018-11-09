const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');


const tagsList = require('./APIs/tagslist')
const addNewTag = require('./APIs/addNewTag');
const addCategory = require('./APIs/addCategory');
const addPoints = require('./APIs/addPoints');

//List of APIs
app.use('/addcategory', addCategory);
app.use('/tagslist', tagsList);
app.use('/addnewtag', addNewTag);
app.use('/addpoints', addPoints);
app.get('/', (req, res)=> {
    res.render('home');
});

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

module.exports = app;