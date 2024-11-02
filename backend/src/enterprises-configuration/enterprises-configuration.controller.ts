import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UsePipes } from '@nestjs/common';
import { EnterprisesConfigurationService } from './enterprises-configuration.service';
import { CreateEnterprisesConfigurationDto } from './dto/create-enterprises-configuration.dto';
import { UpdateEnterprisesConfigurationDto } from './dto/update-enterprises-configuration.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ParseMongoIdPipe } from 'src/common/parse-mongo-id.pipe';

@Controller('enterprises-configuration')
export class EnterprisesConfigurationController {
  constructor(private readonly enterprisesConfigurationService: EnterprisesConfigurationService) {}

  @Post()
  @UseInterceptors(FileInterceptor('logo'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createEnterprisesConfigurationDto: CreateEnterprisesConfigurationDto) {
    return this.enterprisesConfigurationService.create(file,createEnterprisesConfigurationDto);
  }

  @Get()
  findAll() {
    return this.enterprisesConfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enterprisesConfigurationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseMongoIdPipe) id: string, @Body() updateEnterprisesConfigurationDto: UpdateEnterprisesConfigurationDto) {
    return this.enterprisesConfigurationService.update(id, updateEnterprisesConfigurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enterprisesConfigurationService.remove(+id);
  }
}
