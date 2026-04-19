import { IsInt, IsString } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  content: string;

  @IsInt()
  ministryId: number;
}
