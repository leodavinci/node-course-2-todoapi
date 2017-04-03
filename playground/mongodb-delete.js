const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // // delete many
    // db.collection('Todos').deleteMany({text: 'Something to do 1'}).then((result) => {
    //     console.log(result);
    // });
    //
    // // delete one
    // db.collection('Todos').deleteOne({text: 'Something to do 1'}).then((result) => {
    //     console.log(result);
    // });

    // fineOne and delete
    db.collection('Todos').findOneAndDelete({text: 'Something to do 1'}).then((result) => {
        console.log(result);
    });

    // db.close();
});
