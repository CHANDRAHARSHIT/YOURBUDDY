// Resource model for YOUR BUDDY
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  documentType: { type: String, required: true }, // e.g., PYQ, notes
  college: { type: String, required: true },
  course: { type: String, required: true },
  subject: { type: String, required: true },
  yearOrSemester: { type: String, required: true },
  fileUrl: { type: String, required: true },
  downloadCount: { type: Number, default: 0 },
  approved: { type: Boolean, default: false },
  rejected: { type: Boolean, default: false },
  feedback: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);
