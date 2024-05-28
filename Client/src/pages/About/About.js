import React from "react";
import { AboutWrapper } from "./About.styles";
import { Container, HeadingTitle } from "../../globalStyles";
import BannerAdd from "../../components/BannerAdd/BannerAdd";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import GoogleAdsenseSquare from "../../components/GoogleAdsense/GoogleAdsenseSquare";
import { BannerAddWrapper } from "../../components/BannerAdd/BannerAdd.styles";
import GoogleAdsenseHorizontal from "../../components/GoogleAdsense/GoogleAdsenseHorizontal";

const About = () => {
  return (
    <AboutWrapper>
      <ErrorBoundary>
        <BannerAddWrapper>
          <GoogleAdsenseHorizontal
            dataAdSlot={"5427598878"}
            clientId={"ca-pub-1882134198580257"}
          />
        </BannerAddWrapper>
      </ErrorBoundary>
      <Container>
        <div className="about-wrapper">
          <div className="single-column">
            <HeadingTitle>The Mission</HeadingTitle>
            <p className="extra-large-body">
              The mission is to provide a safe place to ask difficult questions
              of Jesus without the fear of judgement or rejection and to
              discover the truths of what it means to live the Christian faith.
              The AI Jesus responses are created from His words and His
              character in the Bible.
            </p>
            <p className="extra-large-body">
              The  team leverages AI technology, seminary trained
              individuals, pastors, and professors, and commentaries to help
              ensure that you receive Biblically accurate and authentic messages
              as if you were talking directly with Jesus.
            </p>
            <p className="extra-large-body">
              The world is full of questions about God, salvation, evil,
              struggles in life, and so much more. We all want a safe place to
              talk with Jesus and get answers to the questions and struggles we
              face. .
            </p>
          </div>
          <div className="two-column">
            <div className="left">
              <HeadingTitle>How Does This Work?</HeadingTitle>
              <p className="extra-large-body">
                The process is simple. You can either start with one of the FAQs
                by clicking on the “Ask Now” prompts. You may also go to the
                “Ask Now” menu tab and open a dialogue box to start your
                conversation with Jesus.
              </p>
              <p className="extra-large-body">
                Just ask your questions and receive the AI response from Jesus
                based on His words and character presented in the Bible. Jesus
                will ask you questions. This is your opportunity to converse
                with Jesus.
              </p>
              <p className="extra-large-body">
                Your questions and conversations are anonymous. The 
                Team does not know who you are unless you provide contact
                information in the Contact Form. The contact form is completely
                separate from your AI conversation with Jesus.
              </p>
              <p className="extra-large-body">
                You are anonymous. You do not have to create an account or sign
                in to talk with Jesus. His AI responses are available 24 hours a
                day. It is a personal conversation between you and the AI Jesus.
              </p>
              <p className="extra-large-body">
                Of course, you are encouraged to pray and talk with Jesus
                personally. You can learn more about Him by exploring God’s
                word, the Bible. You can also discover more about the Christian
                faith through a local church. He is available to you.
              </p>
              <p className="extra-large-body">
                Your questions and conversations here are not intended to
                replace prayer and personal conversations with Jesus. You are
                encouraged to pray and have conversations with Jesus separately
                from this AI resource. He is always there for you.
              </p>
              <HeadingTitle>How Do We Help?</HeadingTitle>
              <p className="extra-large-body">
                The purpose of these conversations with the AI Jesus is to give
                you a safe place to ask difficult questions without fear of
                judgement or rejection. This resource is here to help you
                develop a more personal relationship with Jesus Christ.
              </p>
              <p className="extra-large-body">
                You should find responses that give biblical insights while
                giving you the compassion of Christ. We want you to establish a
                new sense of peace and create hope for something more.
              </p>
              <p className="extra-large-body">
                Ideally, we want this conversation with Jesus to serve as a
                catalyst for you getting more information and seeking help
                through a local church.
              </p>
              <HeadingTitle>Reaching the JAH Team?</HeadingTitle>
              <p className="extra-large-body">
                If you have trouble with one of the responses that the AI Jesus
                provides, we invite you to reach out to us through the Contact
                Us Form. We are happy to receive your questions or concerns.
              </p>
              <p className="extra-large-body">
                If you are a ministry or church and would like to align with the
                JAH Mission, we invite you to reach out to us through the
                contact form.
              </p>
            </div>
            <div className="right">
              <ErrorBoundary>
                <GoogleAdsenseSquare
                  dataAdSlot={"3366781433"}
                  clientId={"ca-pub-1882134198580257"}
                />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </Container>
    </AboutWrapper>
  );
};

export default About;
