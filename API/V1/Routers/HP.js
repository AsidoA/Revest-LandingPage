const Router = require('express').Router();

const {HomePage,contactUs} = require('../Controllers/HP.js');

Router.get('/', HomePage);
Router.post('/', contactUs)

module.exports = Router;