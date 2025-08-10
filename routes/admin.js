// Admin routes for YOUR BUDDY
const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Middleware to check admin
function adminOnly(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).json({ message: 'Admin only' });
  next();
}

// List pending resources
router.get('/pending', auth, adminOnly, async (req, res) => {
  const pending = await Resource.find({ approved: false, rejected: false }).populate('uploader', 'name email');
  res.json(pending);
});

// Approve resource
router.post('/approve/:id', auth, adminOnly, async (req, res) => {
  await Resource.findByIdAndUpdate(req.params.id, { approved: true });
  res.json({ message: 'Resource approved' });
});

// Reject resource
router.post('/reject/:id', auth, adminOnly, async (req, res) => {
  await Resource.findByIdAndUpdate(req.params.id, { rejected: true, feedback: req.body.feedback });
  res.json({ message: 'Resource rejected' });
});

// List users/feedback (for admin)
router.get('/users', auth, adminOnly, async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

module.exports = router;
