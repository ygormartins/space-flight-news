import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return 'Fullstack Challenge 2021 🏅 - Space Flight News';
  }
}
