import { Injectable } from "@nestjs/common";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { InjectRepository } from "@nestjs/typeorm";
import { OpenAIApi, Configuration } from "openai";
import { user } from "../entities/user.entity";
import * as dotenv from "dotenv";
dotenv.config();
import { Repository } from "typeorm";
import { data } from "../entities/data.entity";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { prompt } from "../entities/prompt.entity";

@Injectable()
export class userService {
  constructor(
    @InjectRepository(user)
    private userRepository: Repository<user>,
    @InjectRepository(data)
    private dataRepository: Repository<data>,
    @InjectRepository(prompt)
    private promptRepository: Repository<prompt>
  ) {}

  /// Main Chat API
  async createCompletion(prompt: string, date, id: string, conversation) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt_time = date;
    const openai = new OpenAIApi(configuration);
    const result = await openai.createChatCompletion({
      // openai call for finding question is from bible or not
      model: "gpt-3.5-turbo",
      max_tokens: 20,
      temperature: 0,
      messages: [
        {
          role: "system",
          content: `Question:${prompt} can this question be answered by any one of the versions or variations of the bible, the question is asked to jesus so, if it is asked about jesus like " who are you" then the output comes from if statement only. if yes just output True  else output False once, strictly don't write anything else
         `,
        },
      ],
      // messages: [
      //   {
      //     role: "system",
      //     content: `Question:${prompt} Can the Bible provide a specific answer about Jesus? If the question is related to Jesus, like "Who are you,"and many one to one then the output should come from an if statement. If yes, output True; else, output False. Please do not include any additional information.`
      //   },
      // ],
      
    });
    console.log("1", result.data.choices[0].message.content);
    const directory = "./directory";
    const vectorStore = await HNSWLib.load(directory, new OpenAIEmbeddings());

    const similarity = await vectorStore.similaritySearch(prompt, 1); //finding similarity data from vector-store
    // console.log(similarity[0].metadata.question);

    // Prompt ( getting prompt from db )
    const promptEntity = await this.promptRepository.find();
    const tempPrompts = promptEntity.map((entity) => entity.prompt);
    // console.log("Prompt:", tempPrompts)

    let template = "";
       
    if (result.data.choices[0].message.content == "True") {
      template = `${tempPrompts}` + `${prompt}`;
    }  else {
        template =
          ` just answer from data given below but do not response with "According to the provided data, if the question is" & "As a language model AI,"
              data: {
                pageContent: "` +
          similarity[0].pageContent +
          `",
                metadata: { question: "` +
          similarity[0].metadata.question +
          `" }
              }
          if you do not have answer, strictly say  "I'm not familiar with that topic/question & i don't know the answer".
          don't try to create answer from chatGPT
           `;
      }
    
    console.log("User prompt:", prompt);
    // console.log("4",template);
    console.log(conversation);
      await conversation.push(
        { role: "system", content: template  },
        { role: "user", content: prompt }
      ); // creating message for model= openai 3.5
    
  
    const data = await openai.createChatCompletion({
      // Openai final call
      model: "gpt-3.5-turbo",
      max_tokens: 1000,
      temperature: 0,
      messages: conversation,
    });

    const ans = data.data.choices[0].message.content;
    console.log("Final answer:", ans);

    const time = new Date();
    const response_time = time;
    const response = String(ans);
    let user = await this.userRepository.findOne({
      // Finding user from data-base
      where: { u_id: id },
      relations: ["dataEntries"],
    });

    if (!user) {
      user = this.userRepository.create({
        // creating new user
        u_id: id,
        dataEntries: [],
      });
    }

    const dataEntry = this.dataRepository.create({
      prompt,
      prompt_time,
      response,
      response_time,
    });
    await this.dataRepository.save(dataEntry); // adding data to data table

    if (!user.dataEntries) {
      user.dataEntries = [dataEntry];
    } else {
      user.dataEntries.push(dataEntry);
    }
    await this.userRepository.save(user);
    return ans;
  }

  // For user chat history

  async getUser(id: string) {
    try {
      return this.userRepository.findOne({
        where: { u_id: id },
        relations: ["dataEntries"],
      });
    } catch (error) {
      throw new Error(
        "An error occurred while adding prompt: " + error.message
      );
    }
  }
}
