import {
  IsArray,
  IsBoolean,
  IsInt,
  IsObject,
  IsOptional,
  Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { AnyTxtRecord } from 'dns';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

export class PaginationDTO {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  limit?: number = DEFAULT_LIMIT;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number = DEFAULT_PAGE;

  @IsObject()
  @IsOptional()
  sort?: any = {};

  @IsObject()
  @IsOptional()
  filter?: any = {};

  @IsArray()
  @IsOptional()
  fields?: string[] = [];

  @Transform((value) => {
    return Boolean(value);
  })
  @IsBoolean()
  @IsOptional()
  notPaginated?: boolean = false;
}

export class PaginatedQuery {
  filter: any;
  project: any;
  sort: any;
  skip: number;
  limit: number;
}
