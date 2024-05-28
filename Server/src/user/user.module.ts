import { Module } from '@nestjs/common';
import { userService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usercontroller } from './user.controller';
import { user } from '../entities/user.entity';
import { data } from '../entities/data.entity';
import { prompt } from 'src/entities/prompt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([user, data,prompt])],
  controllers: [usercontroller],
  providers: [userService],
})
export class userModule {}
