const express = require('express');
const router = express.Router();
const members = require('../../Members');

const { body, validationResult } = require('express-validator');
const uuid = require('uuid');
const randomstring = require("randomstring");

// req = 1
const idFilter = req => member => member.id === parseInt(req.params.id);
// // const idFilter = function(req) {
//     members.forEach(member => {
//       // check if the member we are looking at has an id eql to the id sent in our URL
//       if (member.id === parseInt(req.params.id)) {
//         return true;
//       } else {
//         return false;
//       }
//     })
// }

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member :<name>
router.get('/:id', (req, res) => {
  // Were going through all the members (1000) and on the ones where we perform idFilter (above) set found = true
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
  ] ,(req, res) => {
    const randomHash = randomstring.generate(7);
    const avatarLink = 'https://robohash.org';
    let avatarHash = avatarLink + '/' + randomHash + '?size=100x100&set=set1';

    // POST Requests, JSON, express api for req body
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
        // create the updated member
        const updMember = {...member, ...req.body};
        // overwrite that member with the above ^^
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
