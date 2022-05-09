import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { paginated, PaginationDTO } from 'src/common/pagination';
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
  findAll(@Query() query: PaginationDTO) {
    return paginated(
      query,
      (args: PaginationDTO) => this.articlesService.getArticles(args),
      (args: PaginationDTO) => this.articlesService.getArticlesCount(),
    );
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
