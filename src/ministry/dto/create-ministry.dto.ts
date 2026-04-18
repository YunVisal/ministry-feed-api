import { IsString, IsUrl, IsOptional } from 'class-validator';

export class CreateMinistryDto {
  @IsString()
  nameKh: string;

  @IsString()
  nameEn: string;

  @IsUrl()
  badge: string;

  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  telephone: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsUrl()
  websiteUrl: string;

  @IsUrl()
  facebookPageUrl: string;
}
