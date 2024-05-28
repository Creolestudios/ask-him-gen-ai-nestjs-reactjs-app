import { styled } from "styled-components";

export const ChatAskWrapper = styled.div`
  background: #f4f4f4;
  height: 690px;
  border-radius: 20px;
  padding: 20px;
  /* overflow-y: auto; */
  @media screen and (max-width: 1920px) {
    height: 550px;
  }
  @media screen and (max-width: 1440px) {
    height: 500px;
  }
  @media screen and (max-width: 767px) {
    height: 80vh;
    border-radius: 0;
  }
`;
