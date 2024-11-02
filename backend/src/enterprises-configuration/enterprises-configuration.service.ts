import { BadRequestException, Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { CreateEnterprisesConfigurationDto } from './dto/create-enterprises-configuration.dto';
import { UpdateEnterprisesConfigurationDto } from './dto/update-enterprises-configuration.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Enterprises } from './entities/enterprises-configuration.entity';
import { Model } from 'mongoose';
import { s3 } from '../aws/aws.config';
import e from 'express';


@Injectable()
export class EnterprisesConfigurationService {

  constructor(
    @InjectModel(Enterprises.name)
    private readonly enterprisesModel: Model<Enterprises>
  ) {} 

  async create(file: Express.Multer.File,createEnterprisesConfigurationDto: CreateEnterprisesConfigurationDto) {
    try {

      const response = await this.enterprisesModel.create(createEnterprisesConfigurationDto);
      if (response) {
        const {_id} = response.toJSON();
        const id = _id.toString();
        const logoUrl= await this.uploadFile(file, createEnterprisesConfigurationDto, id);
        let updatedResponse;
        if (logoUrl) {
          updatedResponse = await this.update(id, {logoUrl});
        }
        if (updatedResponse) {
          return updatedResponse
        };
        throw new Error('Error creating enterprise');
      }
      throw new Error('Error creating enterprise');
      

    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Enterprise already exists in db');
      }
      console.log(error);
      throw new InternalServerErrorException('Can´t create Enterprise - check server logs');
    }
  }

  async findAll() {
    try {
      const response = await this.enterprisesModel.find();
      return response;
    }
    catch (error) {
      console.log(error);
      return new NotAcceptableException('Error getting enterprises');
    }   
  }

  findOne(id: string) {
    try {
      const response = this.enterprisesModel.findById(id);
      if (response) {
        return response;
      }
      else {
        throw new BadRequestException('Enterprise not found');
      }
    } catch (error) {
      throw new BadRequestException('Enterprise not found');
    }
  }

  async update(id: string, updateEnterprisesConfigurationDto: UpdateEnterprisesConfigurationDto) {
    try {
      const object = await this.findOne(id)
      if (object) {
        await object.updateOne(updateEnterprisesConfigurationDto, {new: true});
        return {...object.toJSON(), ...updateEnterprisesConfigurationDto};
      }
    } catch (error) {
      throw new BadRequestException('Enterprise not found');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} enterprisesConfiguration`;
  }

  async uploadFile(file:Express.Multer.File, createEnterprisesConfigurationDto:CreateEnterprisesConfigurationDto, id:string): Promise<string> {
    const params = {
      Bucket: 'ecommerce2112', // Nombre del bucket
      Key: `${id}/logo.png`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const { Location } = await s3.upload(params).promise();
    return Location; // Retorna la URL del archivo subido
  }
}
