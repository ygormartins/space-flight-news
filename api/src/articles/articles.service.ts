import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseModel } from 'src/database/database.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './articles.schema';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: DatabaseModel<ArticleDocument>,
  ) {}

  async getArticles(): Promise<ArticleDocument[]> {
    return await this.articleModel.find();
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
}
