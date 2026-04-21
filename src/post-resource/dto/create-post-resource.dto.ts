import { ArrayNotEmpty, IsArray, IsNumber, IsUrl } from 'class-validator';

export class CreatePostResourceDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsUrl({}, { each: true })
  resourceUrl: string[];

  @IsNumber()
  postId: number;
}
