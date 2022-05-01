import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.createArticle(createArticleDto);
  }

  @Get()
  findAll() {
    return this.articlesService.getArticles();
  }

  @Get(':id')
  findOne(@Param('id') articleId: string) {
    return this.articlesService.getArticle(articleId);
  }

  @Put(':id')
  update(
    @Param('id') articleId: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.updateArticle(articleId, updateArticleDto);
  }

  @Delete(':id')
  delete(@Param('id') articleId: string) {
    return this.articlesService.deleteArticle(articleId);
  }
}
