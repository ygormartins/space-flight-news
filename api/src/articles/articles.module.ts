import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Article, ArticleSchema } from './articles.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    ConfigModule,
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
