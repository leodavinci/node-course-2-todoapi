const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58e1e81aacab272c1db5c41b')
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
