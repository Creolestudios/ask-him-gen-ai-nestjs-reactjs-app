import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { adminService } from "./admin.service";

@Controller("admin")
export class admincontroller {
  constructor(private botservice: adminService) {}

  ///  get all users chat-histry 
  @Get("chat")
  getall() {
    return this.botservice.getUsers();
  }

  ///  Get all prompt and answer added by admin
  @Get("all")
  getprompt() {
    return this.botservice.getquestion();
  }

  /// Update question and answer 
  @Patch("prompt")
  async updateoneprompt(@Body() data: { question: string }) {
    const id = 1;
    const { question } = data;
    return this.botservice.updateprompt(id, question);
  }

  /// Chat prompt
  @Get("chatprompt")
  getPrompt() {
    return this.botservice.getprompt();
  }

  /// Update chat prompt
  @Patch("editchatprompt")
  async adminPrompt(@Body() Data: { prompt: string }) {
    const id = 1;
    const { prompt } = Data;
    return this.botservice.editprompt(id, prompt);
  }

  /// Admin login
  @Post("login")
  async loginAdmin(@Body() body: { email: string; password: string }) {
    try {
      const { email, password } = body;

      const loginResult = await this.botservice.login(email, password);

      if (loginResult === "Login successful") {
        return { success: true, message: loginResult };
      } else {
        return { success: false, message: loginResult };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: "An error occurred" };
    }
  }

  /// Search api
  @Get('search')
  async searchDataEntriesByPrompt(@Query('prompt') prompt: string) {
    try {
      const dataEntries = await this.botservice.searchDataEntriesByPrompt(prompt);
      return { success: true, data: dataEntries };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  // @Post('add')
  // async addprompts(@Body() data: { question: string; answer: string }) {
  //   const { question, answer } = data;
  //   return await this.botservice.addnewprompt(question, answer);
  // }
  // @Delete(':id')
  // async deleteoneprompt(@Param('id') id:string){
  //   return await this.botservice.deleteoneprompt(id)
  // }
  // @Patch(':id')
  // async updateoneprompt(
  //   @Body() data: { question: string; answer: string },
  //   @Param('id') id: string,
  // ) {
  //   const { question, answer } = data;
  //   return this.botservice.updateoneprompt(id, question, answer);
  // }
}
