const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter name'],
    minlength: [2, 'Name must be at least 2 characters'],
  },
  pref_position: {
      type: String
  }
},
{ timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
