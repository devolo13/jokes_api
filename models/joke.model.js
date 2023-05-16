const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "setup is required"],
    minLength: [10, "setup should be at least 10 characters long"]
  },
  punchline: {
    type: String,
    required: [true, "punchline is required"],
    minLength: [3, "punchline should be at least 3 characters long"]
  },
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
