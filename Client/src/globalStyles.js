// globalStyles.js
import { createGlobalStyle, styled } from 'styled-components';
import { color, fontFamily } from './assets/css/variable';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${color.whiteColor};
    /* font-family: Open-Sans, Helvetica, Sans-Serif; */
    font-family: ${fontFamily.firaSansRegular};
  }

  *{
    box-sizing: border-box;
    font-variant-ligatures: none;
    text-decoration: none;
  }

  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  /* heading font */
  h1, h2, h3, h4, h5, h6{
    font-family: ${fontFamily.firaSansCondensedBold};
  }
  h1{
    font-size: 80px;
    line-height: 96px;
    @media screen and (max-width: 1600px){
      font-size: 65px;
      line-height: 76px;
    }
    @media screen and (max-width: 1440px){
      font-size: 52px;
      line-height: 65px;
    }
    @media screen and (max-width: 1199px){
      font-size: 42px;
      line-height: 52px;
    }
    @media screen and (max-width: 991px){
      font-size: 32px;
      line-height: 42px;
    }
    @media screen and (max-width: 767px){
      font-size: 28px;
      line-height: 32px;
    }
  }
  h2{
    font-size: 54px;
    line-height: 64px;
    @media screen and (max-width: 1600px){
      font-size: 45px;
      line-height: 55px;
    }
    @media screen and (max-width: 1440px){
      font-size: 40px;
      line-height: 50px;
    }
    @media screen and (max-width: 1199px){
      font-size: 32px;
      line-height: 42px;
    }
    @media screen and (max-width: 991px){
      font-size: 28px;
      line-height: 38px;
    }
    @media screen and (max-width: 767px){
      font-size: 24px;
      line-height: 28px;
    }
  }
  h3{
    font-size: 38px;
    line-height: 45px;
    @media screen and (max-width: 1600px){
      font-size: 35px;
      line-height: 42px;
    }
    @media screen and (max-width: 1440px){
      font-size: 30px;
      line-height: 38px;
    }
    @media screen and (max-width: 767px){
      font-size: 22px;
      line-height: 26px;
    }
    /* @media screen and (max-width: 991px){
      font-size: 22px;
      line-height: 30px;
    }
    @media screen and (max-width: 767px){
      font-size: 20px;
      line-height: 24px;
    } */
  }
  h4{
    font-size: 28px;
    line-height: 34px;
    @media screen and (max-width: 1600px){
      font-size: 24px;
      line-height: 30px;
    }
    @media screen and (max-width: 1440px){
      font-size: 22px;
      line-height: 28px;
    }
    /* @media screen and (max-width: 1199px){
      font-size: 20px;
      line-height: 26px;
    }
    @media screen and (max-width: 991px){
      font-size: 18px;
      line-height: 22px;
    } */
    /* @media screen and (max-width: 767px){
      font-size: 20px;
      line-height: 26px;
    } */
  }
  h5{
    font-size: 22px;
    line-height: 26px;
    /* @media screen and (max-width: 1600px){
      font-size: 20px;
      line-height: 24px;
    } */
    @media screen and (max-width: 1440px){
      font-size: 20px;
      line-height: 24px;
    }
    /* @media screen and (max-width: 1199px){
      font-size: 16px;
      line-height: 20px;
    } */
  }
  h6{
    font-size: 18px;
    line-height: 22px;
    @media screen and (max-width: 1600px){
      font-size: 17px;
      line-height: 22px;
    }
    @media screen and (max-width: 1440px){
      font-size: 16px;
      line-height: 20px;
    }
    /* @media screen and (max-width: 1199px){
      font-size: 15px;
      line-height: 18px;
    } */
  }

  /* body font */
  .extra-large-body, .large-body,  .medium-body, .small-body{
    font-family: ${fontFamily.firaSansRegular};
  }
  .extra-large-body{
    font-size: 22px;
    line-height: 26px;
    @media screen and (max-width: 1600px){
      font-size: 20px;
      line-height: 24px;
    }
    @media screen and (max-width: 1440px){
      font-size: 18px;
      line-height: 22px;
    }
    @media screen and (max-width: 1199px){
      font-size: 16px;
      line-height: 20px;
    }
  }
  .large-body{
    font-size: 20px;
    line-height: 24px;
    @media screen and (max-width: 1600px){
      font-size: 18px;
      line-height: 22px;
    }
    @media screen and (max-width: 1440px){
      font-size: 16px;
      line-height: 20px;
    }
    @media screen and (max-width: 1199px){
      font-size: 15px;
      line-height: 18px;
    }
  }
  .medium-body{
    font-size: 18px;
    line-height: 22px;
    @media screen and (max-width: 1600px){
      font-size: 16px;
      line-height: 20px;
    }
    @media screen and (max-width: 1440px){
      font-size: 15px;
      line-height: 18px;
    }
    @media screen and (max-width: 1199px){
      font-size: 14px;
      line-height: 18px;
    }
  }
  .small-body{
    font-size: 16px;
    line-height: 20px;
    @media screen and (max-width: 1600px){
      font-size: 15px;
      line-height: 20px;
    }
    @media screen and (max-width: 1440px){
      font-size: 14px;
      line-height: 17px;
    }
    @media screen and (max-width: 1199px){
      font-size: 13px;
      line-height: 16px;
    }
  }

  .ant-modal{
    &.forgot-password-modal{
      .forgot-passowrd{
        width: 100%;
        form{
          width: 100%;
          .ant-form-item{
            position: relative;
            /* margin-bottom: 40px; */
            .ant-form-item-label{
              height: 100%;
              margin-top: 6px;
            }
            .ant-form-item-explain{
              + div{
                height: auto !important;
              }
            }
          }
        }
      }
      .ant-modal-header{
        margin-bottom: 30px;
      }
      form{
        margin: 0;
        .ant-form-item{
         
          &:last-child{
            margin-bottom: 0;
          }
          .ant-form-item-label{
            display: flex;
            align-items: center;
            label{
              font-size: 16px !important;
            }
          }
          .ant-input{
            height: 40px !important;
          }
          button{
            cursor: pointer !important;
            height: 35px !important;
            font-size: 16px !important;
            line-height: 1;
            background: ${color.secondaryColor} !important;
            color: ${color.blackColor} !important;
            font-family: ${fontFamily.firaSansRegular};
            span{
              cursor: pointer !important;
            }
          }
        }
      }
    }
  }

  /* notification */
  .ant-notification{
    .ant-notification-notice-message{
      display: none;
    }
    .ant-notification-notice-description{
      color: green !important;
      font-family: ${fontFamily.firaSansRegular};
      font-size: 16px !important;
    }
    .error{
      .ant-notification-notice-description{
        color: red !important;
      }
    }
  }

  /* pop over css */
  .ant-popover{
    &.ant-popconfirm{
      .ant-popover-content{
        .ant-popover-inner{
          .ant-popover-inner-content{
            .ant-popconfirm-message{
              .ant-popconfirm-message-icon{
                svg{
                  color: ${color.secondaryColor};
                }
              }
              .ant-popconfirm-message-text{
                .ant-popconfirm-title, .ant-popconfirm-description{
                  color: ${color.primaryColor};
                }
              }
            }
            .ant-popconfirm-buttons{
              button{
                color: ${color.whiteColor};
                background: ${color.primaryColor};
                border: 1px solid ${color.primaryColor};
                cursor: pointer !important;
                &.ant-btn-default{
                  background: ${color.whiteColor};
                  color: ${color.primaryColor};
                }
                span{
                  cursor: pointer !important;
                }
              }
            }
          }
        }
      }
    }
  }

`;

export default GlobalStyle;

export const Container = styled.div`
  padding: 0 150px;
  width: 100%;

  @media screen and (max-width: 1600px) {
    padding: 0 120px;
  }
  @media screen and (max-width: 1440px) {
    padding: 0 90px;
  }
  @media screen and (max-width: 1199px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 991px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 15px;
  }
`;

export const PageTitle = styled.h1`
  color: ${color.primaryColor};
`;
export const HeadingTitle = styled.h2`
  color: ${color.primaryColor};
  margin-bottom: 15px;
`;
export const Title = styled.h3`
  color: ${color.primaryColor};
  margin-bottom: 15px;
`;
export const SmallTitle = styled.h4`
  color: ${color.primaryColor};
  margin-bottom: 15px;
`;
export const ExtraSmallTitle = styled.h5`
  color: ${color.primaryColor};
  margin-bottom: 15px;
`;

export const FormWrapper = styled.div`
  .ant-form {
    display: flex;
    flex-wrap: wrap;
    .ant-form-item {
      width: 100%;
      margin-bottom: 40px;
      @media screen and (max-width: 1600px) {
        margin-bottom: 30px;
      }
      @media screen and (max-width: 1440px) {
        margin-bottom: 25px;
      }
      @media screen and (max-width: 1199px) {
        margin-bottom: 20px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      .ant-form-item-row {
        .ant-form-item-label {
          text-align: left;
          width: 100%;
          @media screen and (max-width: 767px) {
            padding: 0;
          }
          label {
            font-size: 22px;
            line-height: 22px;
            font-family: ${fontFamily.firaSansCondensedMedium};
            color: ${color.primaryColor};
            margin-bottom: 8px;
            @media screen and (max-width: 1600px) {
              font-size: 20px;
              line-height: 20px;
            }
            @media screen and (max-width: 1440px) {
              /* font-size: 18px;
                    line-height: 18px; */
            }
            &::after {
              display: none;
            }
          }
        }
        .ant-form-item-control {
          flex: unset;
          width: 100%;
          input {
            height: 55px;
            background: ${color.greyColor5};
            border: 1px solid ${color.greyColor5};
            border-radius: 10px;
            padding: 10px 10px;
            font-size: 18px;
            font-family: ${fontFamily.firaSansCondensedRegular};
            color: ${color.primaryColor};
            @media screen and (max-width: 1600px) {
              /* height: 50px; */
              /* font-size: 17px; */
            }
            @media screen and (max-width: 1440px) {
              /* height: 45px;
                  font-size: 16px; */
            }
            &::placeholder {
              color: #939393;
            }
          }
          textarea {
            background: ${color.greyColor5};
            border: 1px solid ${color.greyColor5};
            border-radius: 10px;
            padding: 10px 10px;
            font-size: 18px;
            font-family: ${fontFamily.firaSansCondensedRegular};
            color: ${color.primaryColor};
            &::placeholder {
              color: #939393;
            }
          }
          button {
            width: 100%;
            height: 55px;
            background: ${color.secondaryColor};
            color: ${color.greyColor1};
            border-radius: 40px;
            font-family: ${fontFamily.firaSansMedium};
            font-size: 20px;
            box-shadow: none;
            cursor: pointer !important;
            @media screen and (max-width: 1600px) {
              /* height: 50px; */
              /* font-size: 18px; */
            }
            @media screen and (max-width: 1440px) {
              /* height: 45px; */
              /* font-size: 16px; */
            }
            span {
              cursor: pointer !important;
            }
          }
          .ant-form-item-explain-error {
            @media screen and (max-width: 767px) {
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
`;
