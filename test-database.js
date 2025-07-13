const { PrismaClient } = require('./src/generated/prisma');
const mongoose = require('mongoose');

// Test database connections
async function testDatabases() {
  console.log('🧪 Testing Database Connections...\n');

  // Test MongoDB
  console.log('📊 Testing MongoDB...');
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blog-summarizer';
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected successfully');
    
    // Test basic operations
    const testDoc = new mongoose.models.BlogContent({
      originalUrl: 'https://test.com',
      title: 'Test Blog',
      content: 'Test content',
      wordCount: 10
    });
    await testDoc.save();
    console.log('✅ MongoDB write test passed');
    
    await mongoose.models.BlogContent.deleteOne({ originalUrl: 'https://test.com' });
    console.log('✅ MongoDB delete test passed');
    
    await mongoose.disconnect();
    console.log('✅ MongoDB disconnected successfully\n');
  } catch (error) {
    console.log('❌ MongoDB test failed:', error.message);
  }

  // Test Supabase/PostgreSQL
  console.log('🗄️ Testing Supabase/PostgreSQL...');
  try {
    const prisma = new PrismaClient();
    await prisma.$connect();
    console.log('✅ Supabase/PostgreSQL connected successfully');
    
    // Test basic operations
    const testSummary = await prisma.blogSummary.create({
      data: {
        originalUrl: 'https://test.com',
        title: 'Test Summary',
        summary: 'Test summary content',
        urduSummary: 'ٹیسٹ خلاصہ',
        wordCount: 5
      }
    });
    console.log('✅ Supabase write test passed');
    
    await prisma.blogSummary.delete({
      where: { id: testSummary.id }
    });
    console.log('✅ Supabase delete test passed');
    
    await prisma.$disconnect();
    console.log('✅ Supabase/PostgreSQL disconnected successfully\n');
  } catch (error) {
    console.log('❌ Supabase/PostgreSQL test failed:', error.message);
  }

  console.log('🎉 Database tests completed!');
}

// Run tests
testDatabases().catch(console.error); 