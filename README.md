# ask-him-gen-ai-nestjs-reactjs
This application has been curated for organizations or individual who want to built their chatbot and have 1st person responses. The prompt written will be trained for some special scenarios and will be behaving likewise. The users will not feel like they are talking to a bot but a human instead.

##  App (BibleGpt)

## Table of Contents

1. [Introduction](#1-introduction)
2. [Project Overview](#2-project-overview)
3. [Getting Started](#3-getting-started)
4. [Code Structure](#4-code-structure)
5. [Dependencies](#5-dependencies)
6. [Deployment](#7-deployment)
7. [Usage](#8-usage)


## 1. Introduction

Welcome to our unique chatbot development platform tailored for  individuals interested in building chatbots trained on Bible data. Our platform offers a novel approach where the chatbot's responses are derived from extensive training on the rich content of the Bible, ensuring that interactions resonate deeply with users.



## 2. Project Overview

With a focus on authenticity and reverence for the sacred text, our chatbots are adept at providing insightful and spiritually enriching responses that align with biblical teachings. Whether users seek guidance, inspiration, or simply wish to engage in meaningful conversations, our platform offers a seamless and immersive experience rooted in the wisdom of the Scriptures.


## 3. Getting Started

To get started with the  App, follow these steps:

### Prerequisites

Make sure you have the following installed:

- An internet connection (for fetching external dependencies)
- Insatll Node.js [See this](https://www.guru99.com/download-install-node-js.html) for installation steps.
- Install Mysql Database.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:Creolestudios/ask-him-gen-ai-nestjs-reactjs.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd ask-him-gen-ai-nestjs-reactjs
   ```

3. **Client and Server Setup**

   * Create and Add credentials in development.env file in Server/src/common/env

   ```
      OPENAI_API_KEY= ""
      OPENAI_API_KEY=
      MYSQL_DATABASE=
      MYSQL_USERNAME=
      MYSQL_PASSWORD=
      EMAIL=
      EMAIL_PASS=
      ADMIN_EMAIL=


   ```

   ## Client Setup

   ```
   npm install 

   npm start 

   ```


   ## Server Setup


   ```
   npm install 

   npm run start:dev

   ```




## 4. Code Structure

The project follows a modular and organized structure to enhance readability, maintainability, and scalability. Key components include:

- **ReactJs** The main structure of the web page designed using React Framework.
- **NodeJs** Backend Logic written in nodejs, Logic for handling user interactions, getting transcript , and giving summary as Situations, Challenges, Risks, Impacts and Solutions.
- **LangChain** Advanced library for working with LLM like GPT.  
- **OpenAI** Using OpenAI api key to get summary of Situations, Challenges, Risks, Impacts and Solutions from transcript.

## 5. Dependencies

- **MySQL** SQL database for stroring chatHistory and user data 
- **OpenAI** Provides different text based models like gpt-3.5,gpt-4,text-ada-embedding



## 6. Deployment

The BibleGPT App is deployed and accessible online. 

## 7. Usage

1. **Adding a Prompt:**
   - Ask Question Related to Bible and get response 
