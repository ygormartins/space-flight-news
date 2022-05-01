import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

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

  @IsDate()
  @IsOptional()
  readonly publishedAt?: Date;

  @IsBoolean()
  @IsOptional()
  readonly featured?: boolean;
}
