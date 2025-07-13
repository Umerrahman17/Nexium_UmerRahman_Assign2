import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogContent extends Document {
  originalUrl: string;
  title: string;
  content: string;
  author?: string;
  publishedDate?: Date;
  scrapedAt: Date;
  wordCount: number;
  language: string;
  tags?: string[];
  summaryId?: string; // Reference to Supabase summary
}

const BlogContentSchema = new Schema<IBlogContent>({
  originalUrl: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  title: {
    type: String,
    required: true,
    index: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: null
  },
  publishedDate: {
    type: Date,
    default: null
  },
  scrapedAt: {
    type: Date,
    default: Date.now
  },
  wordCount: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    default: 'en'
  },
  tags: [{
    type: String
  }],
  summaryId: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
BlogContentSchema.index({ originalUrl: 1 });
BlogContentSchema.index({ title: 'text', content: 'text' });
BlogContentSchema.index({ scrapedAt: -1 });
BlogContentSchema.index({ summaryId: 1 });

export default mongoose.models.BlogContent || mongoose.model<IBlogContent>('BlogContent', BlogContentSchema); 