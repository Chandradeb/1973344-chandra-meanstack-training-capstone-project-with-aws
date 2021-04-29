'user_strict';

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const mongooseDbOption = {       // to avoid warning
    useNewUrlParser: true,
    useUnifiedTopology: true
}
let _db;

module.exports = {
    connect(callback) {
        MongoClient.connect(url, mongooseDbOption, (err, client) => {
            _db = client.db('grocery_store');
            return callback(err, client);
        });
    },

    getDb() {
        return _db;
        
    }
};
