import mongoose from 'mongoose';

const blogContentSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: null,
  },
  publishedDate: {
    type: Date,
    default: null,
  },
  wordCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
blogContentSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.BlogContent || mongoose.model('BlogContent', blogContentSchema); 