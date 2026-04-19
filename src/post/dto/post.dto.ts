import { Expose, Type } from 'class-transformer';

// should be declare first so that the export dto can referrence when initialize
class PostMinistryDto {
  @Expose()
  id: number;

  @Expose()
  nameKh: string;

  @Expose()
  nameEn: string;

  @Expose()
  badge: string;
}

export class PostDto {
  @Expose()
  id: number;

  @Expose()
  content: string;

  @Expose()
  @Type(() => PostMinistryDto)
  ministry: PostMinistryDto;
}
