const express = require('express');
const router = express.Router();

const uuid = require('uuid');
const randomstring = require("randomstring");

let mongoClient = require('mongodb').MongoClient;

// Get all members
router.get('/get-all', (req, res) => {
  mongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true }, function (err, client) {
    if (err) {
      throw err;
    }

    var db = client.db('tomas');

    db.collection('members').find({}).toArray(function (err, result) {
      if (err) {
        throw err;
      }

      members = result;
      console.log(result);
      return res.render('index', { members });
    });
  });
});

// Get specific member
router.get('/:id', (req, res) => {
  mongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true }, function (err, client) {
    if (err) {
      throw err;
    }

    var db = client.db('tomas');

    db.collection('members').findOne({id: req.body.id});
  });
});

// Create Member
router.post('/', (req, res) => {
  const randomHash = randomstring.generate(7);
  const avatarLink = 'https://robohash.org';
  let avatarHash = avatarLink + '/' + randomHash + '?size=100x100&set=set1';

  mongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true }, function (err, client) {
    if (err) {
      throw err;
    }

    var db = client.db('tomas');

    db.collection('members').insertOne({
      id: uuid.v4(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      email: req.body.email,
      avatar: avatarHash
    });
  });

});

// Update Member
router.put('/:id', (req, res) => {
  const randomHash = randomstring.generate(7);
  const avatarLink = 'https://robohash.org';
  let avatarHash = avatarLink + '/' + randomHash + '?size=100x100&set=set1';

  mongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true }, function (err, client) {
    if (err) {
      throw err;
    }

    var db = client.db('tomas');

    db.collection('members').findOneAndUpdate({id: req.body.id},
      {
        "$set": {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          gender: req.body.gender,
          email: req.body.email,
          avatar: avatarHash
      }
    });
  });

});

// Delete Member
router.delete('/:id', (req, res) => {
  mongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true }, function (err, client) {
    if (err) {
      throw err;
    }

    var db = client.db('tomas');

    db.collection('members').findOneAndDelete({ id: req.body.id });
  });
});

module.exports = router;
