import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ArticlesModule } from './articles/articles.module';
import { TasksModule } from './tasks/tasks.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule,
    DatabaseModule,
    ArticlesModule,
    TasksModule,
    LogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
