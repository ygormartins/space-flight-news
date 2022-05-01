import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  readonly title: string;

  @IsUrl()
  readonly url: string;

  @IsUrl()
  readonly imageUrl: string;

  @IsString()
  readonly newsSite: string;

  @IsString()
  readonly summary: string;

  @IsDate()
  readonly publishedAt: Date;

  @IsBoolean()
  @IsOptional()
  readonly featured?: boolean;
}
