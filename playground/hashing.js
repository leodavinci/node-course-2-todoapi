const {SHA256} = require('crypto-js');

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'some secret key').toString()
// };
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'some secret key').toString();
//
// if(resultHash === token.hash) {
//     console.log('data wa not changed');
// }
// else {
//     console.log('data corrupt');
// }
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, 'sign123');
console.log(`token: ${token}`);
var decoded = jwt.verify(token ,'sign123');
console.log(`decoded: ${decoded}`);
