# Database Setup Guide

## Overview
This app uses two databases:
1. **MongoDB** - Stores full blog content
2. **Supabase (PostgreSQL)** - Stores summaries and user data

## Step 1: Environment Configuration

Create a `.env.local` file in your project root with the following variables:

```env
# Database URLs
DATABASE_URL="postgresql://your-supabase-connection-string"
MONGODB_URI="mongodb://localhost:27017/blog-summarizer"

# For production, use your actual database URLs:
# DATABASE_URL="postgresql://username:password@host:port/database"
# MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/blog-summarizer"

# Next.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Optional: For better performance
NODE_ENV="development"
```

## Step 2: MongoDB Setup

### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use: `mongodb://localhost:27017/blog-summarizer`

### Option B: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string
4. Use: `mongodb+srv://username:password@cluster.mongodb.net/blog-summarizer`

## Step 3: Supabase Setup

### Option A: Supabase Cloud
1. Create account at [Supabase](https://supabase.com)
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string
5. Format: `postgresql://postgres:[password]@[host]:[port]/postgres`

### Option B: Local PostgreSQL
1. Install PostgreSQL locally
2. Create database: `blog-summarizer`
3. Use: `postgresql://username:password@localhost:5432/blog-summarizer`

## Step 4: Database Migration

Run the following commands to set up your databases:

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database (for development)
npx prisma db push

# Or run migrations (for production)
npx prisma migrate dev --name init
```

## Step 5: Verify Setup

Test your database connections:

```bash
# Test Prisma connection
npx prisma studio

# Test MongoDB connection (if using local MongoDB)
mongosh mongodb://localhost:27017/blog-summarizer
```

## Database Schema

### MongoDB Collections
- **BlogContent**: Stores full blog articles
  - `originalUrl` (unique)
  - `title`
  - `content`
  - `author`
  - `publishedDate`
  - `wordCount`
  - `language`
  - `tags`
  - `summaryId` (reference to Supabase)

### Supabase Tables
- **blog_summaries**: Stores summaries
  - `id` (primary key)
  - `originalUrl` (unique)
  - `title`
  - `summary` (English)
  - `urduSummary` (Urdu translation)
  - `mongoId` (reference to MongoDB)
  - `wordCount`
  - `language`
  - `tags`
  - `author`
  - `publishedDate`
  - `userId` (reference to users)

- **users**: Stores user information
  - `id` (primary key)
  - `email` (unique)
  - `name`
  - `createdAt`
  - `updatedAt`

## Usage Examples

```typescript
import DatabaseService from '@/lib/database';

// Save blog content and summary
const result = await DatabaseService.saveBlogWithSummary(
  {
    originalUrl: 'https://example.com/blog',
    title: 'Blog Title',
    content: 'Full blog content...',
    wordCount: 1500
  },
  {
    originalUrl: 'https://example.com/blog',
    summary: 'English summary...',
    urduSummary: 'Urdu summary...',
    wordCount: 150
  }
);

// Get blog with summary
const data = await DatabaseService.getBlogWithSummary('https://example.com/blog');
```

## Troubleshooting

### Common Issues:
1. **Connection refused**: Check if database services are running
2. **Authentication failed**: Verify username/password in connection strings
3. **Schema mismatch**: Run `npx prisma generate` and `npx prisma db push`
4. **MongoDB connection**: Ensure MongoDB is running and accessible

### Development Tips:
- Use `npx prisma studio` to view/edit data
- Use MongoDB Compass for MongoDB management
- Check logs for detailed error messages 