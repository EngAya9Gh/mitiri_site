import { Article } from '@prisma/client';
import { IArticleRepository } from '@/repositories/IArticleRepository';
import { ArticleRepository } from '@/repositories/ArticleRepository';

export class ArticleService {
    private articleRepository: IArticleRepository;

    constructor(articleRepository: IArticleRepository = new ArticleRepository()) {
        this.articleRepository = articleRepository;
    }

    async createArticle(data: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<Article> {
        return this.articleRepository.create(data);
    }

    async getArticleBySlug(slug: string, locale: string): Promise<Article | null> {
        return this.articleRepository.findBySlug(slug, locale);
    }

    async getAllArticles(options?: { search?: string, page?: number, limit?: number }): Promise<Article[]> {
        const skip = options?.page && options?.limit ? (options.page - 1) * options.limit : undefined;
        return this.articleRepository.findAll({
            search: options?.search,
            skip: skip,
            take: options?.limit
        });
    }

    async getArticlesCount(search?: string): Promise<number> {
        return this.articleRepository.count({ search });
    }
}
