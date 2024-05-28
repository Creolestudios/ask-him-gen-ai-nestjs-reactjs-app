import { styled } from "styled-components";
import { color, fontFamily } from "../../../assets/css/variable";

export const LoginWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login {
    margin-top: 0 !important;
  }
  .login-wrap {
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    @media screen and (max-width: 1440px) {
      max-height: calc(100vh - 140px);
    }
    @media screen and (max-width: 1199px) {
      max-height: calc(100vh - 120px);
    }
  }
  .ant-form {
    /* margin: 100px auto 0; */
    /* @media screen and (max-width: 1199px) {
      margin: 50px auto 0;
    } */
    .ant-form-item {
      @media screen and (max-width: 1199px) {
        margin-bottom: 15px;
      }
      .ant-form-item-label {
        label {
          color: ${color.greyColor1} !important;
          font-family: ${fontFamily.publicSnasSemiBold} !important;
          @media screen and (max-width: 1199px) {
            font-size: 18px !important;
          }
        }
      }
    }
    button {
      height: 48px !important;
      font-size: 18px !important;
      margin-top: 10px;
    }
    .ant-input {
      font-family: ${fontFamily.publicSnasMedium} !important;
      color: ${color.greyColor1} !important;
      @media screen and (max-width: 1199px) {
        height: 50px !important;
        font-size: 16px !important;
      }
      &:focus {
        box-shadow: none;
      }
    }
    .ant-input-affix-wrapper {
      height: 55px;
      border-radius: 10px;
      padding: 0 12px 0 0;
      background: #ececec;
      border: 1px solid #ececec !important;
      @media screen and (max-width: 1199px) {
        height: 50px;
      }
      &.ant-input-affix-wrapper-focused {
        box-shadow: none;
      }
      .ant-input {
        border: none;
        height: 54px !important;
        @media screen and (max-width: 1199px) {
          height: 48px !important;
        }
      }
    }
    &.forgot-email {
      .ant-form-item {
        margin-bottom: 15px;
        button {
          margin-top: 20px;
        }
        .forgot-password-loader {
          > div {
            margin: 0;
          }
        }
      }
    }
  }

  .forgot-btn {
    font-family: ${fontFamily.publicSnasMedium};
    background: none !important;
    color: red !important;
    box-shadow: none;
    text-align: center;
    width: fit-content;
    margin: 20px auto 0;
    display: flex;
    font-size: 14px;
    text-decoration: underline;
  }
  .error-btn {
    font-family: ${fontFamily.publicSnasMedium};
    background: none !important;
    color: red !important;
    box-shadow: none;
    margin: auto auto 0;
    display: flex;
    font-size: 14px;
    line-height: 22px;
    padding-left: 50px;
  }
`;
