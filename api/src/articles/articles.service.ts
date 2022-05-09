import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseModel } from 'src/database/database.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './articles.schema';
import { ConfigService } from '../config/config.service';
import axios from 'axios';
import { PaginationDTO } from 'src/common/pagination';
import { buildPaginationQuery } from 'src/common/pagination/pagination';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: DatabaseModel<ArticleDocument>,
    private readonly configService: ConfigService,
  ) {}

  SPACE_FLIGHT_NEWS_API = this.configService.get('SPACE_FLIGHT_NEWS_API');
  RESPONSE_LIMIT = this.configService.get('FETCH_NEW_ARTICLES_LIMIT');

  async getArticles(query: PaginationDTO): Promise<ArticleDocument[]> {
    const { filter, project, sort, skip, limit } = buildPaginationQuery(query);

    return await this.articleModel
      .find(filter, project)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  async getArticlesCount(): Promise<number> {
    return await this.articleModel.count();
  }

  async getArticle(articleId: string): Promise<ArticleDocument> {
    return await this.articleModel.findOne({ id: articleId });
  }

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    return await this.articleModel.create(createArticleDto);
  }

  async updateArticle(
    articleId: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<any> {
    return await this.articleModel.updateOne(
      { id: articleId },
      updateArticleDto,
    );
  }

  async deleteArticle(articleId: string): Promise<any> {
    return await this.articleModel.delete({ id: articleId });
  }

  async fetchNewArticles(): Promise<any> {
    const params = {
      _limit: this.RESPONSE_LIMIT,
      _sort: 'publishedAt:desc',
    };

    let articles = [];

    const newestArticle: Article = await this.articleModel.findOne(
      {},
      {},
      { sort: { publishedAt: -1 } },
    );

    if (newestArticle) {
      params['publishedAt_gt'] = newestArticle.publishedAt;
      params['_sort'] = 'publishedAt:asc';
    }

    try {
      articles = (
        await axios.get(`${this.SPACE_FLIGHT_NEWS_API}/articles`, {
          params,
        })
      ).data;
    } catch (err) {
      return { error: true, message: err.message, params };
    }

    const itemsAdded = await this.articleModel.insertMany(articles);

    return {
      error: false,
      message: `${itemsAdded.length} new articles added`,
      params,
    };
  }
}
