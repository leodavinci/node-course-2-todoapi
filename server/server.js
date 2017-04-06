require('./config/config');

const _ = require('lodash');
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
var bodyParser = require('body-parser');
var express = require('express');
var {objectID} = require('mongodb');

// var newTodo = new Todo({
//     text: 'cook dinner'
// });
// newTodo.save().then((doc) => {
//     console.log(doc);
// },(e) => {
//     console.log('Unable to save todo');
// });

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.post('/todos',(req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos',(req,res) => {
    Todo.find().then((result)=>{
        res.send({todos: result});
    },(err)=>{
        res.status(400).send(err);
    });
});

// GET /todos/:id
app.get('/todos/:id',(req,res) => {
    var id = req.params.id;
    console.log(id);
    // validate id
    // if(!objectID.isValid(id)){
    //     return res.status(404).send();
    // }
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    });
});

// DELETE /todos/:id
app.delete ('/todos/:id',(req,res) => {
    var id = req.params.id;
    console.log(id);
    // validate id
    // if(!objectID.isValid(id)){
    //     return res.status(404).send();
    // }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    });
});

// PATCH /todos/:id
app.patch('/todos/:id',(req, res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text','completed']);
    // validate id
    // if(!objectID.isValid(id)){
    //     return res.status(404).send();
    // }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}....`);
});
