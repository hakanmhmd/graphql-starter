const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const app = require('express')();
const graphqlHTTP = require('express-graphql');
const Schema = require('./schema/');
console.log(`Running in ${env} mode...`);

const { MongoClient } = require('mongodb');
const assert = require('assert');
const mConfig = require('./config/mongodb')[env];


MongoClient.connect(mConfig.url, (err, mPool) => {
    assert.equal(err, null);

    app.use('/graphql', (req, res) => {
        graphqlHTTP({
            graphiql: true,
            schema: Schema
        })(req, res);
    });

    app.listen(port, () => {
        console.log(`Listening on ${port} port ...`)
    });
});




