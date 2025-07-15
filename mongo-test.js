require('dotenv').config();
const { insertBlogContent, connectToMongo } = require('./src/lib/mongodb');

async function runTest() {
  try {
    await connectToMongo();
    const testData = {
      originalUrl: 'https://example.com/standalone',
      title: 'Test Blog (Standalone Script)',
      content: 'This is a test blog content from the standalone script.',
      author: 'Test Author',
      publishedDate: new Date(),
      wordCount: 9,
      language: 'en',
      tags: ['test', 'standalone']
    };
    const result = await insertBlogContent(testData);
    console.log('Inserted:', result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

runTest(); 