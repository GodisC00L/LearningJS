fs = require('fs');

let data = fs.readdirSync('/home/user/');
console.log('data: ', data);

console.log('This comes after');