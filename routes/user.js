// User profile routes for YOUR BUDDY
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Resource = require('../models/Resource');

// Get user profile
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password').populate('uploads');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// List user's uploaded resources
router.get('/my-uploads', auth, async (req, res) => {
  try {
    const resources = await Resource.find({ uploader: req.user.id });
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching uploads' });
  }
});

module.exports = router;
