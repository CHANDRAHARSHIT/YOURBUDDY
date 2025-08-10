// User model for YOUR BUDDY
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  uploads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
  notifications: [{ type: String }],
  resetToken: String,
  resetTokenExpiry: Date
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
