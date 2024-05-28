import { styled } from 'styled-components';

export const AskWrapper = styled.div`
  .container {
    @media screen and (max-width: 767px) {
      padding: 0;
    }
  }
  .chat-wrapper {
    display: flex;
    align-items: center;
    padding: 20px 0 70px;
    @media screen and (max-width: 1199px) {
      flex-direction: column;
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
      padding: 20px 0 40px;
    }
    .left {
      flex: 1;
      width: 100%;
    }
    .right {
      width: 300px;
      margin-left: 100px;
      @media screen and (max-width: 1600px) {
        margin-left: 90px;
      }
      @media screen and (max-width: 1440px) {
        width: 250px;
        margin-left: 70px;
      }
      @media screen and (max-width: 1199px) {
        margin-left: 50px;
        margin-top: 50px;
      }
      @media screen and (max-width: 991px) {
        margin-left: 40px;
        width: 250px;
      }
      @media screen and (max-width: 767px) {
        /* margin-left: 0; */
        margin: 40px auto 0;
        max-width: 300px;
        width: 100%;
      }
    }
  }
`;
