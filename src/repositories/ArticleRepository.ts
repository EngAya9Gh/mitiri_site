import { PrismaClient, Article } from '@prisma/client';
import { IArticleRepository } from './IArticleRepository';
import prisma from '@/lib/prisma';

export class ArticleRepository implements IArticleRepository {
    constructor(private db: PrismaClient = prisma) { }

    async create(data: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<Article> {
        return this.db.article.create({
            data,
        });
    }

    async findBySlug(slug: string, locale: string): Promise<Article | null> {
        const decodedSlug = decodeURIComponent(slug);
        // Search in both fields to handle language switching or manual URL edits gracefully
        return this.db.article.findFirst({
            where: {
                OR: [
                    { slug_en: decodedSlug },
                    { slug_ar: decodedSlug }
                ]
            }
        });
    }

    async findAll(options?: { search?: string, skip?: number, take?: number }): Promise<Article[]> {
        const where = options?.search ? {
            OR: [
                { title_en: { contains: options.search } },
                { title_ar: { contains: options.search } },
                { content_en: { contains: options.search } },
                { content_ar: { contains: options.search } },
            ]
        } : {};

        return this.db.article.findMany({
            where,
            orderBy: { publishedAt: 'desc' },
            skip: options?.skip,
            take: options?.take,
        });
    }

    async count(options?: { search?: string }): Promise<number> {
        const where = options?.search ? {
            OR: [
                { title_en: { contains: options.search } },
                { title_ar: { contains: options.search } },
                { content_en: { contains: options.search } },
                { content_ar: { contains: options.search } },
            ]
        } : {};

        return this.db.article.count({ where });
    }
}
