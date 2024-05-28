import React from "react";
import { InformationWrapper } from "./Information.styles";
import { Container, HeadingTitle, Title } from "../../globalStyles";
import CustomButtom from "../CustomButtom/CustomButtom";
import { ReactComponent as MessageSvg } from "../../assets/images/message.svg";
import { color } from "../../assets/css/variable";
import { homeInformation } from "../../constant";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <InformationWrapper>
      <Container>
        <div className="information-wrapper">
          {homeInformation.map((el) => (
            <div className="item">
              <div className="content">
                <HeadingTitle>{el.title}</HeadingTitle>
                <p className="extra-large-body">
                  {el.peragraph}
                </p>
                <p className="large-body">{el.askQue}</p>
                <Link to={'/ask'}>
                <CustomButtom
                  className="primary-btn"
                  text={el.btnText}
                  icon={MessageSvg}
                  height={"80px"}
                  background={`${color.secondaryColor}`}
                  color={`${color.greyColor1}`}
                  textVisiableMb={true}
                />
                </Link>
              </div>
              <img src={el.imgInfo} alt="images" />
            </div>
          ))}
        </div>
      </Container>
    </InformationWrapper>
  );
};

export default Information;
