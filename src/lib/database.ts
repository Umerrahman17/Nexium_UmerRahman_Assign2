import { connectToMongo } from './mongodb';
import BlogContent from './models/BlogContent';
import { IBlogContent } from './models/BlogContent';
import { prisma } from './prisma';

export interface BlogData {
  originalUrl: string;
  title: string;
  content: string;
  author?: string;
  publishedDate?: Date;
  wordCount: number;
  language?: string;
  tags?: string[];
}

export interface SummaryData {
  originalUrl: string;
  title?: string;
  summary: string;
  urduSummary: string;
  wordCount: number;
  language?: string;
  tags?: string[];
  author?: string;
  publishedDate?: Date;
}

export class DatabaseService {
  // MongoDB Operations
  static async saveBlogContent(data: BlogData): Promise<string> {
    await connectToMongo();
    const blogContent = new BlogContent({
      originalUrl: data.originalUrl,
      title: data.title,
      content: data.content,
      author: data.author,
      publishedDate: data.publishedDate,
      wordCount: data.wordCount,
      language: data.language || 'en',
      tags: data.tags || []
    });

    await blogContent.save();
    return blogContent._id.toString();
  }

  static async getBlogContent(url: string): Promise<IBlogContent | null> {
    await connectToMongo();
    return await BlogContent.findOne({ originalUrl: url });
  }

  static async updateBlogContentWithSummaryId(url: string, summaryId: string): Promise<void> {
    await connectToMongo();
    await BlogContent.updateOne({ originalUrl: url }, { summaryId });
  }

  // Supabase (PostgreSQL) Operations via Prisma
  static async saveSummary(data: SummaryData): Promise<string> {
    const summary = await prisma.blogSummary.create({
      data: {
        originalUrl: data.originalUrl,
        title: data.title,
        summary: data.summary,
        urduSummary: data.urduSummary,
        wordCount: data.wordCount,
        language: data.language || 'en',
        tags: data.tags || [],
        author: data.author,
        publishedDate: data.publishedDate
      }
    });

    return summary.id;
  }

  static async getSummary(url: string) {
    return await prisma.blogSummary.findUnique({
      where: { originalUrl: url }
    });
  }

  static async getSummaryById(id: string) {
    return await prisma.blogSummary.findUnique({
      where: { id }
    });
  }

  static async getAllSummaries(limit: number = 10, offset: number = 0) {
    return await prisma.blogSummary.findMany({
      take: limit,
      skip: offset,
      orderBy: { createdAt: 'desc' }
    });
  }

  static async updateSummary(id: string, data: Partial<SummaryData>) {
    return await prisma.blogSummary.update({
      where: { id },
      data: {
        title: data.title,
        summary: data.summary,
        urduSummary: data.urduSummary,
        wordCount: data.wordCount,
        language: data.language,
        tags: data.tags,
        author: data.author,
        publishedDate: data.publishedDate
      }
    });
  }

  static async deleteSummary(id: string) {
    return await prisma.blogSummary.delete({
      where: { id }
    });
  }

  // Combined Operation
  static async saveBlogWithSummary(blogData: BlogData, summaryData: SummaryData) {
    const mongoId = await this.saveBlogContent(blogData);
    const summaryId = await this.saveSummary(summaryData);
    await this.updateBlogContentWithSummaryId(blogData.originalUrl, summaryId);
    return { mongoId, summaryId };
  }

  static async getBlogWithSummary(url: string) {
    const [blogContent, summary] = await Promise.all([
      this.getBlogContent(url),
      this.getSummary(url)
    ]);
    return { blogContent, summary };
  }
}

export default DatabaseService;
