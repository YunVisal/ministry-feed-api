import { Expose, Type, ClassConstructor } from 'class-transformer';
import { PageMetaDataDto } from './page-meta.dto';

export function createPaginatedDto<T>(itemDto: ClassConstructor<T>) {
  class PaginatedDto {
    @Expose()
    @Type(() => itemDto)
    data: T[];

    @Expose()
    @Type(() => PageMetaDataDto)
    meta: PageMetaDataDto;
  }

  return PaginatedDto;
}
