import React from "react";
import { AskingHomeWrapper } from "./AskingHome.styles";
import { Container, HeadingTitle, Title } from "../../globalStyles";
import CustomButtom from "../CustomButtom/CustomButtom";
import { color } from "../../assets/css/variable";
import { ReactComponent as MessageSvg } from "../../assets/images/message.svg";
import { askingData } from "../../constant";
import { Link } from "react-router-dom";

const AskingHome = () => {
  return (
    <AskingHomeWrapper>
      <Container>
        <div className="asking-wrapper">
          <div className="left-content">
            <HeadingTitle className="title">Common Questions</HeadingTitle>
            <p className="extra-large-body">
              We hope you find the answers you are looking for, and that you’ll
              be inspired to learn more.
            </p>
          </div>
          <div className="right-content">
            <div className="list-asking">
              {askingData.map((data) => (
                <div className="item">
                  <div className="content">
                    <Title className="title">{data.title}</Title>
                    <p className="large-body">{data.subTitle}</p>
                    {data.btnText && (
                      <Link to={"/ask"}>
                        {" "}
                        <CustomButtom
                          className="primary-btn"
                          text={data.btnText}
                          icon={MessageSvg}
                          height={"80px"}
                          background={`${color.secondaryColor}`}
                          color={`${color.greyColor1}`}
                          textVisiableMb={true}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </AskingHomeWrapper>
  );
};

export default AskingHome;
