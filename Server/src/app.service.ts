import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import * as dotenv from "dotenv";

dotenv.config();
@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}
  async sendEmail(
    to: string,
    subject: string,
    template: string,
    context: any,
    name: string
  ): Promise<void> {

    // Send email to admin
    await this.mailerService.sendMail({
      to: process.env.ADMIN_EMAIL,
      from: process.env.EMAIL,
      subject: `Issues and feedbacks of ${name}`,
      html: `
      <table>
      <tr>
      <td><strong>Name:</strong></td>
      <td>${name}</td>
      </tr>
      <tr>
      <td><strong>Email:</strong></td>
      <td>${to}</td>
      </tr>
      <tr>
      <td><strong>Message:</strong></td>
      <td>${template}</td>
      </tr>
      </table>`,
      context,
    });

    // Send feedback email to the user

    await this.mailerService.sendMail({
      to: `${to}`,
      from: process.env.EMAIL,
      subject,
      html: `
      <p><strong>Hello ${name}</strong></p>
      <p>${template}</p>
      <p>Thank you <strong>${name}</strong> for reaching out to us regarding the issue you're experiencing with this product.</p>
      <p>We value your feedback and look forward to resolving this issue for you.</p>
      <p><strong>Team </strong></p>
    `,
      context,
    });
  }
}
