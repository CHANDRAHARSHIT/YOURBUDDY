// Resource routes for YOUR BUDDY
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Resource = require('../models/Resource');
const auth = require('../middleware/auth');
const path = require('path');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Upload resource
router.post('/upload', auth, upload.single('file'), async (req, res) => {
  try {
    const { documentType, college, course, subject, yearOrSemester } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;
    const resource = new Resource({
      uploader: req.user.id,
      documentType,
      college,
      course,
      subject,
      yearOrSemester,
      fileUrl
    });
    await resource.save();
    res.status(201).json({ message: 'Resource uploaded, pending approval.' });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed' });
  }
});

// Browse/search resources
router.get('/', async (req, res) => {
  const { college, subject, yearOrSemester, documentType } = req.query;
  const filter = {};
  if (college) filter.college = college;
  if (subject) filter.subject = subject;
  if (yearOrSemester) filter.yearOrSemester = yearOrSemester;
  if (documentType) filter.documentType = documentType;
  filter.approved = true;
  try {
    const resources = await Resource.find(filter).populate('uploader', 'name email');
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resources' });
  }
});

// Download resource (increment count)
router.get('/download/:id', async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource || !resource.approved) return res.status(404).json({ message: 'Resource not found' });
    resource.downloadCount++;
    await resource.save();
    res.download(path.join(__dirname, '..', resource.fileUrl));
  } catch (err) {
    res.status(500).json({ message: 'Download failed' });
  }
});

module.exports = router;
