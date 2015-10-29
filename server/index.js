require('babel/register');

process.env = require('../config/env.js');;
require('module').Module._initPaths();

require('./server.js');
