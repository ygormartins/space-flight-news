import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ArticlesService } from 'src/articles/articles.service';
import { LogsService } from 'src/logs/logs.service';

@Injectable()
export class TasksService {
  constructor(
    private readonly articleService: ArticlesService,
    private readonly logsService: LogsService,
  ) {}

  @Cron('0 0 9 * * *')
  async populateDBWithNewArticles() {
    const populateEventResult = await this.articleService.fetchNewArticles();
    return this.logsService.createLog(populateEventResult);
  }
}
