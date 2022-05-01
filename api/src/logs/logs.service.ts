import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseModel } from 'src/database/database.model';
import { CreateLogDto } from './dto/create-log.dto';
import { Log, LogDocument } from './logs.schema';

@Injectable()
export class LogsService {
  constructor(
    @InjectModel(Log.name)
    private articleModel: DatabaseModel<LogDocument>,
  ) {}

  async createLog(createLogDto: CreateLogDto) {
    return this.articleModel.create(createLogDto);
  }
}
