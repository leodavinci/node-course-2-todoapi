const {objectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
// const {User} = require('./../server/models/user.js');

var id = '58e23b59d9f49553bd83bfbb';

if(!objectID.isValid(id)){
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos: ', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo find by id: ', todo);
}).catch((e) => console.log(e));
