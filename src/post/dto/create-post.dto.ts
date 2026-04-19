import { IsInt, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  content: string;

  @IsInt()
  ministryId: number;
}
