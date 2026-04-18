import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MinistryService } from './ministry.service';
import { CreateMinistryDto } from './dto/create-ministry.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { MinistryDto } from './dto/ministry.dto';
import { UpdateMinistryDto } from './dto/update-ministry.dto';

@Controller('ministry')
@Serialize(MinistryDto)
export class MinistryController {
  constructor(private ministryService: MinistryService) {}

  @Post()
  create(@Body() dto: CreateMinistryDto) {
    return this.ministryService.create(dto);
  }

  @Get()
  getAll() {
    return this.ministryService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.ministryService.getById(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateMinistryDto) {
    return this.ministryService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.ministryService.delete(id);
    return 'ok';
  }
}
