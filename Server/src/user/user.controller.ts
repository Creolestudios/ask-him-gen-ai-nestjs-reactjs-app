import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { userService } from "./user.service";

@Controller()
export class usercontroller {
  constructor(private botservice: userService) {}

  // for prompt and response user side and getting users chat history
  @Post(":userId")
  async bot(
    @Body() userData: { prompt: string; data: string[] },
    @Param("userId") userId: string
  ) {
    const { prompt, data } = userData;
    const conversation = [];
    let role = "user";

    for (const item of data) {
      for (let i = 0; i < item.length; i++) {
        console.log("aaaa", item[2]);
      }
    }
    console.log("imp",data)
    if(data.length > 10){

      for (let i = data.length-10; i < data.length; i++) {
        const promtt = data.map((e:any) => e?.prompt)
        const ress = data.map((e:any) => e?.response)
        conversation.push({ role:"user", content:promtt[i]},{role:"assistant",content:ress[i]})
       
      }
    }else{
      for (let i = 0; i < data.length; i++) {
        const promtt = data.map((e:any) => e?.prompt)
        const ress = data.map((e:any) => e?.response)
        conversation.push({ role:"user", content:promtt[i]},{role:"assistant",content:ress[i]})
       
      }
    }
    // console.log(conversation)
    const date = new Date();
    const stream = await this.botservice.createCompletion(
      prompt,
      date,
      userId,
      conversation
    );
    return prompt + "\n " + stream + "\n";
  }
  // particular user chat history
  @Get(":id")
  async getparuser(@Param("id") id: string) {
    return await this.botservice.getUser(id);
  }
}
