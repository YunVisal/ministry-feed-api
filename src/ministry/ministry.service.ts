import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ministry } from './ministry.entity';
import { Repository } from 'typeorm';
import { CreateMinistryDto } from './dto/create-ministry.dto';
import { UpdateMinistryDto } from './dto/update-ministry.dto';

@Injectable()
export class MinistryService {
  constructor(@InjectRepository(Ministry) private repo: Repository<Ministry>) {}

  create(dto: CreateMinistryDto) {
    const ministry = this.repo.create(dto);
    ministry.createdUser = 'SYSTEM';
    ministry.modifiedUser = 'SYSTEM';
    return this.repo.save(ministry);
  }

  getAll() {
    return this.repo.findBy({ isDeleted: false });
  }

  getById(id: number) {
    return this.repo.findOneBy({ id, isDeleted: false });
  }

  async update(id: number, dto: UpdateMinistryDto) {
    const existingMinistry = await this.getById(id);
    if (!existingMinistry) {
      throw new BadRequestException('Ministry is not found');
    }

    Object.assign(existingMinistry, dto);
    existingMinistry.modifiedUser = 'SYSTEM';
    return this.repo.save(existingMinistry);
  }

  async delete(id: number) {
    const existingMinistry = await this.getById(id);
    if (!existingMinistry) {
      throw new BadRequestException('Ministry is not found');
    }

    existingMinistry.isDeleted = true;
    existingMinistry.modifiedUser = 'SYSTEM';
    return this.repo.save(existingMinistry);
  }
}
