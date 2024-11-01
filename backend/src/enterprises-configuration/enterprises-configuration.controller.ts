import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnterprisesConfigurationService } from './enterprises-configuration.service';
import { CreateEnterprisesConfigurationDto } from './dto/create-enterprises-configuration.dto';
import { UpdateEnterprisesConfigurationDto } from './dto/update-enterprises-configuration.dto';

@Controller('enterprises-configuration')
export class EnterprisesConfigurationController {
  constructor(private readonly enterprisesConfigurationService: EnterprisesConfigurationService) {}

  @Post()
  create(@Body() createEnterprisesConfigurationDto: CreateEnterprisesConfigurationDto) {
    return this.enterprisesConfigurationService.create(createEnterprisesConfigurationDto);
  }

  @Get()
  findAll() {
    return this.enterprisesConfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enterprisesConfigurationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnterprisesConfigurationDto: UpdateEnterprisesConfigurationDto) {
    return this.enterprisesConfigurationService.update(+id, updateEnterprisesConfigurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enterprisesConfigurationService.remove(+id);
  }
}
