import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly emailService: AppService) {}
  @Post("email")
  async sendWelcomeEmail(
    @Body() requestBody: { name: string; email: string; message: string }
  ) {
    const { name, email, message } = requestBody;

    const subject = `Thank you for reaching out ${name}`;
    const template = `${message}`;

    const usemail = email;
    const emailContent = {
      name,
      email,
      message,
    };
    await this.emailService.sendEmail(
      usemail,
      subject,
      template,
      emailContent,
      name
    );
    return "Email sent succesfully!";
  }
}
