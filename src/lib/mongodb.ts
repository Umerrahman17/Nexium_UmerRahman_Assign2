import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import BlogContent, { IBlogContent } from './models/BlogContent';

let isConnected = false;

export async function connectToMongo() {
  if (isConnected) return;

  const uri = 'mongodb+srv://umerrahman1711:Umer%40123@cluster0.k0g1cal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  if (!uri) throw new Error('MONGODB_URI not set in .env');

  try {
    await mongoose.connect(uri, {
      dbName: 'blog-summarizer',
    });
    isConnected = true;
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB Atlas connection failed:', err);
    throw err;
  }
}

export { mongoose };

export async function insertBlogContent(data: Partial<IBlogContent>) {
  await connectToMongo();
  try {
    // Check if a blog with the same originalUrl exists
    const existing = await BlogContent.findOne({ originalUrl: data.originalUrl });
    if (existing) {
      console.log('ℹ️ Blog with this originalUrl already exists, returning existing document.');
      return existing;
    }
    const doc = new BlogContent(data);
    const result = await doc.save();
    console.log('✅ Blog inserted:', result);
    return result;
  } catch (err) {
    console.error('❌ Failed to insert blog:', err);
    throw err;
  }
}

// Test function (only for manual testing, not auto-executed)
export async function testInsert() {
  await insertBlogContent({
    originalUrl: 'https://example.com/test-' + Date.now(),
    title: 'Test Blog Title',
    content: 'This is some test content for MongoDB insert.',
    author: 'Test Author',
    publishedDate: new Date(),
    wordCount: 42,
    language: 'en',
    tags: ['test', 'mongo'],
  });
}
