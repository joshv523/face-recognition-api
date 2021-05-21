# face-recognition-api

This repo contains the back-end code for the face-recognition-app. Here, I coded my back-end API with Node.js and Express.js. I separated each HTTP request into different folders (this case "controllers") that handles image submissions, user sign in, and user registration. Initially, I had my Clarifai API key on the front-end but moved it to the back-end so all calls to the Clarifai API are made on the back-end. I also used a PostgreSQL database for storing user login information. Each user's name, email, and password are stored in the database, with passwords encrypted using bcrypt. I used Knex to connect my database to my API.

What I Used:
1. Node.js
2. Express.js
3. Knex
4. Cors
5. Bcrypt
6. Clarifai API
