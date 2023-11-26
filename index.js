// In node every file is called module.

// module is something that is not accessible out of that file 
// you have to export it to use in another places.

var lib = require('./lib.js' );
//import {sum, diff} from './lib.js'
console.log(lib.diff(3,4 ), lib.sum(4,5));