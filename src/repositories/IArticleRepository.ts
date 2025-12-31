import { Article } from '@prisma/client';

export interface IArticleRepository {
    create(data: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<Article>;
    findBySlug(slug: string, locale: string): Promise<Article | null>;
    findAll(options?: { search?: string, skip?: number, take?: number }): Promise<Article[]>;
    count(options?: { search?: string }): Promise<number>;
}

