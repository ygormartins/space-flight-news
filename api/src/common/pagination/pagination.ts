import { PaginatedQuery, PaginationDTO } from './pagination.dto';

export const paginated = async (
  query: PaginationDTO,
  dataFn: CallableFunction,
  countFn: CallableFunction,
) => {
  let data: any;
  let totalCount: number;

  await Promise.all([
    (data = await dataFn(query)),
    (totalCount = await countFn(query)),
  ]);

  return {
    data,
    page: query.page,
    limit: query.limit,
    count: data.length,
    filter: query.filter,
    totalItems: totalCount,
    totalPages: Math.ceil(totalCount / query.limit),
  };
};

export const buildPaginationQuery = (query: PaginationDTO): PaginatedQuery => {
  const { filter, sort, fields, limit, page } = query;

  const project = {};

  for (const field of fields) {
    project[field] = 1;
  }

  const skip = (page - 1) * limit;

  return { filter, project, sort, skip, limit };
};
