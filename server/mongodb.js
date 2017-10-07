const { MongoClient, ObectId } = require('mongodb');

const mlabUrl = 'mongodb://peter_85:fce13382@ds040637.mlab.com:40637/chameleon-final-project-telerik';

MongoClient.connect(mlabUrl, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected with MongoDb ');
    db.close();
});