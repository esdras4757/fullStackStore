import { PartialType } from '@nestjs/mapped-types';
import { CreateEnterprisesConfigurationDto } from './create-enterprises-configuration.dto';

export class UpdateEnterprisesConfigurationDto extends PartialType(CreateEnterprisesConfigurationDto) {}
