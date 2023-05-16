require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require('./routes/joke.routes');
AllMyUserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
