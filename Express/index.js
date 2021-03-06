const express = require('express');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
app.use(logger);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Home page Route
app.get('/', (req, res) =>
  res.send('Home Page')
);

app.use(logger);

// Users page Route
app.get('/users', authorizeUsersAccess, (req, res) => {
  let name = 'Barbara';
  res.send('Users Page' + name)
});

function authorizeUsersAccess(req, res, next) {
  console.log('authorizeUsersAccess Middleware')
  if (req.query.admin === 'true') {
    next()
  } else {
    res.send('ERROR: You must be an admin')
  }
  next()
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
