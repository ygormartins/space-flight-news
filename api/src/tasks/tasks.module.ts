import { Module } from '@nestjs/common';
import { ArticlesModule } from 'src/articles/articles.module';
import { LogsModule } from 'src/logs/logs.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [ArticlesModule, LogsModule],
  providers: [TasksService],
})
export class TasksModule {}
