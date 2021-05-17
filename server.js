const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'joshua523',
    database : 'facerecognition'
  }
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { res.send('success') });

// dependency injection to signin.js
app.post('/signin', (req, res) => { signin.handleSignIn(req, res, db, bcrypt) });

// dependency injection to register.js
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

// for finding and displaying current users
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) });

// for updating user entries
app.put('/image', (req, res) => { image.handleImage(req, res, db) });

// for connecting to clarifai API
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) });


// for starting the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});

/* API structure
/  --> res = this is working
/signin  --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/