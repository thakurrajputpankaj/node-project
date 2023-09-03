const mongodb = require('mongodb');

let _db;

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://username:password@cluster0.qe7mf2g.mongodb.net/')
        .then(client => {
            console.log('Connection Successful');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
        });
};

function getDB() {
    if (_db) {
        return _db;
    }
    return 'DB not Found';
}

module.exports = {
    mongoConnect: mongoConnect,
    getDB: getDB
};
