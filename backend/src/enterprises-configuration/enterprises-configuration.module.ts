import { Module } from '@nestjs/common';
import { EnterprisesConfigurationService } from './enterprises-configuration.service';
import { EnterprisesConfigurationController } from './enterprises-configuration.controller';
import { EnterprisesSchema, Enterprises } from './entities/enterprises-configuration.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EnterprisesConfigurationController],
  providers: [EnterprisesConfigurationService],
  imports: [MongooseModule.forFeature([{ name: Enterprises.name, schema: EnterprisesSchema }])],
})
export class EnterprisesConfigurationModule {}
