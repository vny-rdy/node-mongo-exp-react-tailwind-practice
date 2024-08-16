const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

// Create model
const User = mongoose.model('User', UserSchema);

module.exports = User;
