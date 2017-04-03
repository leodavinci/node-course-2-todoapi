const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    // db.collection('Todos').find({_id: new ObjectID('58e1db490df8692602e2b64f')}).toArray().then((docs) => {
    //      console.log('Todos');
    //      console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Unable to fetch a todo');
    // });
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count : ${count}`);
    },(err) => {
        console.log('Unable to fetch a todo');
    });
    // db.close();
});
