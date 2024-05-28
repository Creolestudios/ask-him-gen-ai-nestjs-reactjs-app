import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { userModule } from "./user/user.module";
import { adminmodule } from "./admin/admin.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { user } from "./entities/user.entity";
import { data } from "./entities/data.entity";
import { question } from "./entities/question.entity";
import { admin } from "./entities/admin.entity";
import * as dotenv from "dotenv";
import { MailerModule } from "@nestjs-modules/mailer";
import { prompt } from "./entities/prompt.entity";
dotenv.config();
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      },
    }),
    userModule,
    adminmodule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      database: process.env.MYSQL_DATABASE,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      entities: [user, data, question, admin, prompt],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([user, data, question, admin, prompt]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
