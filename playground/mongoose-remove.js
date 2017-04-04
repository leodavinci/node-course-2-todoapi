const {objectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

Todo.remove({}).then((result)=>{
    console.log(result);
});

Todo.findByIdAndRemove('kfbkvdfk ').then((result)=>{
    console.log(result);
});
