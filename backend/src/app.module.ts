import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnterprisesConfigurationModule } from './enterprises-configuration/enterprises-configuration.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://esdras:Esdras2016@cluster0.sgnojtd.mongodb.net/multiStoreApp?retryWrites=true&w=majority&appName=Cluster0',
    ),
    EnterprisesConfigurationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
