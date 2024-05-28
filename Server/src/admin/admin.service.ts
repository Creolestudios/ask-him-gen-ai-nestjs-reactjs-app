import { Injectable } from "@nestjs/common";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { InjectRepository } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
import { user } from "../entities/user.entity";
dotenv.config();
import { Repository } from "typeorm";
import { question } from "../entities/question.entity";
import { admin } from "src/entities/admin.entity";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { prompt } from "../entities/prompt.entity";
import { data } from "src/entities/data.entity";

@Injectable()
export class adminService {
  constructor(
    @InjectRepository(user)
    private userRepository: Repository<user>,
    @InjectRepository(question)
    private questionRepository: Repository<question>,
    @InjectRepository(admin)
    private readonly adminRepository: Repository<admin>,
    @InjectRepository(prompt)
    private promptRepository: Repository<prompt>,
    @InjectRepository(data)
    private dataRepository: Repository<data>,
  ) {}

  /// Get all prompt and answer added by admin @Get('admin/all')
  async getquestion() {
    try {
      return this.questionRepository.find();
    } catch (error) {
      throw new Error(
        "An error occurred while getting questions: " + error.message
      );
    }
  }
  /// get all users chat-histry @Get('admin/chat')
  async getUsers() {
    try {
      return this.userRepository.find({ relations: ["dataEntries"] });
    } catch (error) {
      throw new Error(
        "An error occurred while getting questions: " + error.message
      );
    }
  }

  /// Add & update questions and answer @Patch('admin/prompt')
  async updateprompt(id: number, text: string) {
    const fs = require("fs");
    const directory = "./directory";
    const data = await this.questionRepository.find();
    if (data.length == 0) {
      await this.questionRepository.save({ id: id, prompt: text });
      const vectorStore = await HNSWLib.fromTexts(
        [text],
        [{ id: 1 }],
        new OpenAIEmbeddings()
      );
      await vectorStore.save(directory);
      return "data inserted successfully";
    } else {
      const data = await this.questionRepository.findOneBy({ id: id });
      const directoryPath = "./directory";
      fs.rm(directoryPath, { recursive: true }, (err: any) => {
        if (err) {
          console.error("Error deleting directory:", err);
        } else {
          console.log("Directory deleted successfully.");
        }
      });
      console.log("in update", data);
      Object.assign(data, { id: id, prompt: text });
      console.log("Success", data);

      await this.questionRepository.save(data);
      const vectorStore = await HNSWLib.fromTexts(
        [text],
        [{ id: 1 }],
        new OpenAIEmbeddings()
      );
      await vectorStore.save(directory);
      const result = await vectorStore.similaritySearch(
        "chandrayaan3 date?",
        10
      );
      console.log(result);
      return "data updated successfully";
    }
  }

  /// get the chat-prompt admin side
  async getprompt() {
    try {
      return this.promptRepository.find();
    } catch (error) {
      throw new Error(
        "An error occurred while getting prompt: " + error.message
      );
    }
  }

  /// update the chat-prompt admin side 
  async editprompt(id: number,text: string){
    
    const data = await this.promptRepository.find();
    if (data.length == 0) {
      await this.promptRepository.save({ id: id, prompt: text });
     
      return "data inserted successfully";
    }else {
      const data = await this.promptRepository.findOneBy({ id: id });
      console.log("in update", data);
      Object.assign(data, { id: id, prompt: text });
      await this.promptRepository.save(data)
      console.log("Success", data);
     
      return "data updated successfully";
    }
  }

  /// Login
  async login(email: string, password: string) {
    try {
      if (email == null) {
        return 'Please enter email';
      } else {
        const data = await this.adminRepository.findOneBy({ email: email });
        if (data === null) {
          return 'Please enter valid email';
        } else {
          if (password === null) {
            return 'Please enter password';
          } else {
            if (password === data.password) {
              return 'Login successful';
            } else {
              return 'Please enter valid password';
            }
          }
        }
      }
    } catch (error) {
      /// Handle any errors here
      console.error(error);
      return 'An error occurred';
    }
  }

  /// search services for chat history admin side
  async searchDataEntriesByPrompt(prompt: string) {
    try {
      const dataEntries = await this.dataRepository
        .createQueryBuilder('dataEntry')
        .where('dataEntry.prompt LIKE :prompt', { prompt: `%${prompt}%` })
        .getMany();

      return dataEntries;
    } catch (error) {
      throw new Error('An error occurred while searching data entries: ' + error.message);
    }
  }
}
