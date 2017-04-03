const { MongoClient } = require('mongodb');
const assert = require('assert');
const env = process.env.NODE_ENV || 'development';
const mongoConfig = require('./mongodb')[env];

MongoClient.connect(mongoConfig.url, (err, db) => {
  assert.equal(null, err);

  db.collection('data').insertMany([
    {
      userId: 1,
      username: 'Hakan',
      rating: 4
    },
    {
      userId: 2,
      username: 'Mehmed',
      rating: 5
    }
  ]).then(response => {
    console.log(response);
    db.close();
  });
});
