import { Module } from '@nestjs/common';
import { adminService } from './admin.service';
import { admincontroller } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { question } from '../entities/question.entity';
import { user } from '../entities/user.entity';
import { admin } from '../entities/admin.entity';
import { prompt } from 'src/entities/prompt.entity';
import { data } from 'src/entities/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([question, user, admin,prompt,data])],
  controllers: [admincontroller],
  providers: [adminService],
})
export class adminmodule {}
