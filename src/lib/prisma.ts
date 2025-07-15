// src/lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Hard-coded connection string for debugging
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:1TGK1Q2PD95T8uWY@db.iagxuytsjsremwjjuvtq.supabase.co:5432/postgres"
    }
  }
});

export { prisma };
