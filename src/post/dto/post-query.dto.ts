import { Type } from 'class-transformer';
import { Min, Max, IsInt } from 'class-validator';

export class PostQueryDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(20)
  limit: number;
}
