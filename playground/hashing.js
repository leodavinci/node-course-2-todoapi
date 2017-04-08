const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');

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
// const jwt = require('jsonwebtoken');
//
// var data = {
//     id: 10
// };
//
// var token = jwt.sign(data, 'sign123');
// console.log(`token: ${token}`);
// var decoded = jwt.verify(token ,'sign123');
// console.log(`decoded: ${decoded}`);

var password = 'mayank';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

hashedPassword = '$2a$10$aOwJH1Fgnu6bU8YFiaQra./7I5v1zO.Zaki9MHBHT8crD.pKnXlSy';
bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result);
});
