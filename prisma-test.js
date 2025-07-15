const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.blogSummary.findMany();
    console.log('Success! Found summaries:', result);
  } catch (err) {
    console.error('Prisma error:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 