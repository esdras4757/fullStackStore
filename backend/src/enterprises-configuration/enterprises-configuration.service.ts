import { BadRequestException, Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { CreateEnterprisesConfigurationDto } from './dto/create-enterprises-configuration.dto';
import { UpdateEnterprisesConfigurationDto } from './dto/update-enterprises-configuration.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Enterprises } from './entities/enterprises-configuration.entity';
import { Model } from 'mongoose';
import { s3 } from '../aws/aws.config';


@Injectable()
export class EnterprisesConfigurationService {

  constructor(
    @InjectModel(Enterprises.name)
    private readonly enterprisesModel: Model<Enterprises>
  ) {} 

  async create(file: Express.Multer.File,createEnterprisesConfigurationDto: CreateEnterprisesConfigurationDto) {
    try {
      const logoUrl= await this.uploadFile(file, createEnterprisesConfigurationDto);
      console.log(logoUrl);
      // const response = await this.enterprisesModel.create(createEnterprisesConfigurationDto);
      // return response;

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
      const buckets = await s3.listBuckets().promise();
      console.log('Buckets disponibles:', buckets.Buckets);

      const response = this.enterprisesModel.find();
      return response;
    }
    catch (error) {
      console.log(error);
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

  async uploadFile(file:Express.Multer.File, createEnterprisesConfigurationDto:CreateEnterprisesConfigurationDto): Promise<string> {
    
    const params = {
      Bucket: 'ecommerce2112', // Nombre del bucket
      Key: `${'images'}/${file.originalname}`, // Puedes usar un UUID para un nombre único
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const { Location } = await s3.upload(params).promise();
    return Location; // Retorna la URL del archivo subido
  }
}
