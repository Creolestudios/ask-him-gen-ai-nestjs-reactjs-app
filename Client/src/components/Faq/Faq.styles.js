import { styled } from 'styled-components';
import { color, fontFamily } from '../../assets/css/variable';
import arrowdown from '../../assets/images/arrow.png';

export const FaqWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 70px;
  @media screen and (max-width: 1600px) {
    padding-bottom: 65px;
  }
  .chat-wrapper-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      width: 5px;
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: ${color.primaryColor};
      border-radius: 15px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    .scroll {
      position: absolute;
      right: -10px;
      bottom: 55px;
      width: 30px;
      height: 30px;
      z-index: 1;
      border-radius: 50%;
      background: #fff url(${arrowdown}) no-repeat;
      background-position: center;
      background-size: 35%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      cursor: pointer !important;
      @media screen and (max-width: 1440px) {
        right: -10px;
        bottom: 55px;
        width: 25px;
        height: 25px;
        background-size: 40%;
      }
    }
  }
  .title {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 15px;
    @media screen and (max-width: 1440px) {
      margin-top: 20px;
    }
  }
  .faq-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    @media screen and (max-width: 1199px) {
      flex-direction: column;
    }
    @media screen and (max-width: 767px) {
      margin-top: 15px;
    }
    .faq-item {
      padding: 0 7px;
      max-width: 300px;
      min-width: 200px;
      @media screen and (max-width: 1199px) {
        min-width: 100%;
        max-width: 100%;
        margin-bottom: 10px;
      }
      .content {
        background: ${color.greyColor7};
        padding: 25px 15px;
        min-height: 195px;
        box-shadow: 0px -7.800000190734863px 13.000000953674316px 0px #0000001a inset,
          0px -1px 10px 0px #0000000f;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 1440px) {
          min-height: 150px;
          padding: 20px 15px;
        }
        @media screen and (max-width: 1199px) {
          min-height: auto;
          padding: 12px 15px;
          flex-direction: row;
          justify-content: space-between;
          border-radius: 15px;
        }
        @media screen and (max-width: 767px) {
          flex-direction: column;
          padding: 20px 20px;
        }
        .sub-title {
          text-align: center;
          margin-top: 0;
          margin-bottom: 15px;
          @media screen and (max-width: 1440px) {
            font-size: 18px;
          }
          @media screen and (max-width: 1199px) {
            margin-bottom: 0;
          }
          @media screen and (max-width: 767px) {
            margin-bottom: 15px;
            font-size: 20px;
          }
        }
        button {
          margin-top: 10px;
          background: ${color.secondaryColor};
          color: ${color.primaryColor};
          border-radius: 40px;
          text-transform: capitalize;
          font-size: 18px;
          padding: 18px 40px;
          min-width: 58px;
          font-family: ${fontFamily.firaSansMedium};
          outline: none;
          border: none;
          cursor: pointer !important;
          @media screen and (max-width: 1440px) {
            padding: 14px 30px;
          }
          @media screen and (max-width: 1199px) {
            margin-top: 0;
          }
          &.disabled {
            pointer-events: none;
          }
        }
      }
    }
  }
  .message-wrapper {
    margin-top: auto;
    margin-bottom: 40px;
    @media screen and (max-width: 1600px) {
      margin-bottom: 30px;
    }
    @media screen and (max-width: 1440px) {
      margin-bottom: 20px;
    }

    .message {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;
      margin: 15px 0;
      @media screen and (max-width: 767px) {
      }
      &.response {
        flex-direction: row;
        .msg-content {
          margin: 0 5px 0 10px;
          .user-name {
            text-align: left;
          }
          .message-text {
            background: ${color.primaryColor};
            color: ${color.whiteColor};
            .time {
              color: ${color.whiteColor};
            }
          }
        }
      }
      .ant-avatar {
        min-width: 34px;
        min-height: 34px;
        background: transparent;
        span {
          width: 100%;
          height: 100%;
          position: unset;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .msg-content {
        margin: 0 10px 0 5px;
        .user-name {
          text-align: right;
          font-size: 18px;
          line-height: 12px;
          color: ${color.greyColor2};
          text-transform: capitalize;
          font-family: ${fontFamily.firaSansRegular};
          margin-bottom: 5px;
          @media screen and (max-width: 1600px) {
            font-size: 16px;
          }
          @media screen and (max-width: 1440px) {
            font-size: 15px;
          }
          @media screen and (max-width: 767px) {
            font-size: 14px;
            color: #555;
            font-family: ${fontFamily.firaSansSemiBold};
          }
        }
        .message-text {
          background: ${color.secondaryColor};
          color: ${color.greyColor1};
          font-size: 20px;
          padding: 14px 20px;
          border-radius: 22px;
          @media screen and (max-width: 1600px) {
            font-size: 18px;
          }
          @media screen and (max-width: 1440px) {
            font-size: 16px;
            line-height: 20px;
            padding: 10px 20px;
          }
          @media screen and (max-width: 767px) {
            padding: 10px 15px;
            border-radius: 12px;
          }
          pre {
            text-wrap: wrap;
            margin: 0;
            font-family: ${fontFamily.firaSansRegular};
            white-space: pre-line;
            margin: 0;
          }
        }
      }
      .time {
        white-space: nowrap;
        font-size: 18px;
        line-height: 12px;
        color: ${color.greyColor1};
        font-family: ${fontFamily.firaSansRegular};
        text-transform: uppercase;
        margin-top: 5px;
        @media screen and (max-width: 1600px) {
          font-size: 16px;
        }
        @media screen and (max-width: 1440px) {
          font-size: 15px;
        }
        @media screen and (max-width: 767px) {
          font-size: 14px;
        }
      }
      .loader {
        > div {
          margin-top: 20px;
          margin-bottom: 0;
        }
      }
    }
  }
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: auto;
    .ant-input {
      height: 55px;
      background: ${color.greyColor5};
      border: 1px solid ${color.greyColor5};
      border-radius: 30px;
      color: ${color.primaryColor};
      font-family: ${fontFamily.firaSansCondensedRegular};
      padding: 0 20px;
      font-size: 18px;
      @media screen and (max-width: 1600px) {
        font-size: 16px;
      }
      @media screen and (max-width: 767px) {
        height: 48px;
      }
      &:focus {
        box-shadow: none;
      }
      &::placeholder {
        color: ${color.greyColor3};
      }
    }
    .ant-btn {
      margin-left: 10px;
      @media screen and (max-width: 1600px) {
        font-size: 16px !important;
        height: 55px !important;
      }
      @media screen and (max-width: 1440px) {
        font-size: 14px !important;
      }
      @media screen and (max-width: 767px) {
        height: 40px !important;
        min-width: 40px;
      }
      .anticon {
        @media screen and (max-width: 1600px) {
          width: 40px !important;
          height: 40px !important;
        }
        @media screen and (max-width: 1440px) {
          width: 36px !important;
          height: 36px !important;
        }
        svg {
          @media screen and (max-width: 1600px) {
            width: 30px !important;
          }
          @media screen and (max-width: 1440px) {
            width: 25px !important;
          }
        }
      }
    }
    .disabled {
      cursor: not-allowed !important;
      opacity: 0.5;
      button,
      span,
      svg,
      path {
        cursor: not-allowed !important;
        span,
        svg,
        path {
          cursor: not-allowed !important;
        }
      }
    }
    .loader-wrapper {
      margin-left: 30px;
    }
    .reset {
      margin-left: 15px;
      @media screen and (max-width: 767px) {
        margin-left: 10px;
      }
      svg {
        cursor: pointer !important;
        width: 25px;
        height: 25px;
        @media screen and (max-width: 767px) {
          width: 20px;
          height: 20px;
        }
        path {
          cursor: pointer !important;
          fill: #3d5374;
          stroke: #3d5374;
        }
      }
    }
  }
`;
