import { BadRequestException, Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { CreateEnterprisesConfigurationDto } from './dto/create-enterprises-configuration.dto';
import { UpdateEnterprisesConfigurationDto } from './dto/update-enterprises-configuration.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Enterprises } from './entities/enterprises-configuration.entity';
import { Model } from 'mongoose';

@Injectable()
export class EnterprisesConfigurationService {

  constructor(
    @InjectModel(Enterprises.name)
    private readonly enterprisesModel: Model<Enterprises>
  ) {} 

  async create(createEnterprisesConfigurationDto: CreateEnterprisesConfigurationDto) {
    try {
      const response = await this.enterprisesModel.create(createEnterprisesConfigurationDto);
      return response;

    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Enterprise already exists in db');
      }
      console.log(error);
      throw new InternalServerErrorException('Can´t create Enterprise - check server logs');
    }
  }

  findAll() {
    try {
      const response = this.enterprisesModel.find();
      return response;
    }
    catch (error) {
      return new NotAcceptableException('Error getting enterprises');
    }   
  }

  findOne(id: number) {

    return `This action returns a #${id} enterprisesConfiguration`;
  }

  update(id: number, updateEnterprisesConfigurationDto: UpdateEnterprisesConfigurationDto) {
    return `This action updates a #${id} enterprisesConfiguration`;
  }

  remove(id: number) {
    return `This action removes a #${id} enterprisesConfiguration`;
  }
}
