import { styled } from "styled-components";
import { color } from "../../assets/css/variable";

export const AdminWrapper = styled.div`
  display: flex;
  .sidebar {
    width: 255px;
    height: 100vh;
    @media screen and (max-width: 1440px) {
      width: 240px;
    }
    @media screen and (max-width: 991px) {
      width: 220px;
    }
    .logo {
      height: 100px;
      background: ${color.secondaryColor};
      color: ${color.greyColor1};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      @media screen and (max-width: 1440px) {
        height: 80px;
        font-size: 24px;
      }
      @media screen and (max-width: 1199px) {
        height: 60px;
        font-size: 22px;
      }
    }
  }
  .content-area {
    flex: 1;
  }
`;

export const ContentWrapper = styled.div`
  height: calc(100% - 100px);
  padding: 50px 30px 50px 70px;
  overflow-y: auto;
  @media screen and (max-width: 1440px) {
    padding: 30px;
    height: calc(100% - 80px);
  }
  @media screen and (max-width: 1199px) {
    padding: 20px;
    height: calc(100% - 60px);
  }
`;
