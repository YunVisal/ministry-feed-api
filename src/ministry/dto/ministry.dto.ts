import { Expose } from 'class-transformer';

export class MinistryDto {
  @Expose()
  id: number;

  @Expose()
  nameEn: string;

  @Expose()
  nameKh: string;

  @Expose()
  badge: string;

  @Expose()
  address: string;

  @Expose()
  telephone: string;

  @Expose()
  email: string;

  @Expose()
  websiteUrl: string;

  @Expose()
  facebookPageUrl: string;
}
