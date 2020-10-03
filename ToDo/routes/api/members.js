const express = require('express');
const router = express.Router();
const members = require('../../Members');

const { body, validationResult } = require('express-validator');
const uuid = require('uuid');
const randomstring = require("randomstring");

const idFilter = req => member => member.id === parseInt(req.params.id);

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json(members.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Create Member
router.post('/', [
  body('first_name').isString(),
  body('last_name').isString(),
  body('gender').isString(),
  body('email').isEmail(),
  ],(req, res) => {
    const randomHash = randomstring.generate(7);
    const avatarLink = 'https://robohash.org';
    let avatarHash = avatarLink + '/' + randomHash + '?size=100x100&set=set1';

    const newMember = {
      ...req.body,
      id: uuid.v4(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      email: req.body.email,
      avatar: avatarHash
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ msg: 'Please check the inputs' });
    }

    members.push(newMember);
    res.json(members);
});

// Update Member
router.put('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    members.forEach((member, i) => {
      if (idFilter(req)(member)) {

        const updMember = {...member, ...req.body};
        members[i] = updMember
        res.json({ msg: 'Member updated', updMember });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Delete Member
router.delete('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json({
      msg: 'Member deleted',
      members: members.filter(member => !idFilter(req)(member))
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
