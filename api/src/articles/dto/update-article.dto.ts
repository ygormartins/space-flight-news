import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { EventDto } from './event.dto';
import { LaunchtDto } from './launch.dto';

export class UpdateArticleDto {
  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsUrl()
  @IsOptional()
  readonly url?: string;

  @IsUrl()
  @IsOptional()
  readonly imageUrl?: string;

  @IsString()
  @IsOptional()
  readonly newsSite?: string;

  @IsString()
  @IsOptional()
  readonly summary?: string;

  @IsDateString()
  @IsOptional()
  readonly publishedAt?: Date;

  @IsArray()
  @IsOptional()
  readonly launches?: LaunchtDto[];

  @IsArray()
  @IsOptional()
  readonly events?: EventDto[];

  @IsBoolean()
  @IsOptional()
  readonly featured?: boolean;
}
