const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('express/lib/response');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'))
app.use('/fonts', express.static(__dirname + '/fonts'))
app.use('/js', express.static(__dirname + '/js'))
app.use(express.urlencoded({extended:false}))

const Hp = require('./API/V1/Routers/HP')

app.use('/',Hp);

app.set('view engine','ejs');


const uri = process.env.MONGO_CONN;
mongoose.set("strictQuery", false);
mongoose.connect(uri);
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('Mongo Connected')}).catch((err)=>{
    return res.status(500).json({err})
})

module.exports = app;