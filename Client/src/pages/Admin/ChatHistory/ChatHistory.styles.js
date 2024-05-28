import { styled } from "styled-components";
import { color, fontFamily } from "../../../assets/css/variable";
import arrowIcon from '../../../assets/images/arrow.png';

export const ChatHistoryWrapper = styled.div`
  .input-field {
    margin-bottom: 20px;
    .ant-input-group-wrapper {
      max-width: 320px;
      .ant-input-wrapper {
        border: 1px solid #d0d5dd;
        border-radius: 8px;
        height: 44px;
        @media screen and (max-width: 1440px){
            height: 40px;
        }
        .ant-input-group-addon {
          border: none;
          background: none;
          padding-right: 0;
          .anticon {
            svg {
              width: 20px;
              height: 20px;
              path {
                fill: transparent;
              }
            }
          }
        }
        .ant-input {
          border: none;
          box-shadow: none;
          height: 42px;
          font-size: 16px;
          color: ${color.greyColor1};
          font-family: ${fontFamily.publicSnasSemiBold};
          @media screen and (max-width: 1440px){
            font-size: 14px;
          }
          &::placeholder {
            font-family: ${fontFamily.publicSnasRegular};
            color: #667085;
          }
        }
      }
    }
  }

  .table-wrapper {
    .large-body {
      border-radius: 8px 8px 0 0;
      padding: 16px 25px;
      background: #f9fafb;
      border: 1px solid #eaecf0;
      color: ${color.primaryColor};
      text-transform: capitalize;
      font-family: ${fontFamily.publicSnasSemiBold};
      @media screen and (max-width: 1440px) {
        padding: 12px 20px;
      }
    }
    .ant-table-wrapper {
      width: calc(100vw - 355px);
      overflow-y: auto;
      border: 1px solid #eaecf0;
      border-radius: 8px 8px 0 0;
      @media screen and (max-width: 1440px) {
        width: calc(100vw - 300px);
      }
      @media screen and (max-width: 1199px) {
        width: calc(100vw - 280px);
      }
      @media screen and (max-width: 991px) {
        width: calc(100vw - 260px);
      }
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 10px;
      }
    }
    .ant-table-header {
      height: 50px;
      @media screen and (max-width: 1440px) {
        height: 40px;
      }
      col {
        height: 50px;
        @media screen and (max-width: 1440px) {
          height: 40px;
        }
      }
    }
    .ant-table-body {
      overflow: auto !important;
      height: calc(100vh - 426px);
      @media screen and (max-width: 1440px) {
        height: calc(100vh - 344px);
      }
      @media screen and (max-width: 1199px) {
        height: calc(100vh - 302px);
      }
      &::-webkit-scrollbar {
        width: 5px;
        height: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 10px;
      }
    }
    table {
      tr {
        th {
          height: 50px;
          font-size: 14px;
          line-height: 24px;
          color: #8a92a6;
          text-transform: capitalize;
          font-family: ${fontFamily.publicSnasRegular};
          font-weight: 400;
          padding: 0 15px;
          vertical-align: middle;
          overflow-wrap: inherit;
          @media screen and (max-width: 1440px) {
            padding: 10px;
            height: 40px;
          }
          &::before {
            display: none;
          }
        }
        td {
          vertical-align: top;
          font-size: 14px;
          line-height: 18px;
          color: #667085;
          padding: 12px 15px;
          font-family: ${fontFamily.publicSnasRegular};
          @media screen and (max-width: 1440px) {
            padding: 10px;
          }
          &.number {
            color: #555555;
            font-size: 18px;
            line-height: 20px;
            font-family: ${fontFamily.publicSnasMedium};
            @media screen and (max-width: 1199px){
              font-size: 16px;
            }
          }
          &.question {
            color: #555555;
            font-size: 18px;
            line-height: 20px;
            font-family: ${fontFamily.publicSnasMedium};
            @media screen and (max-width: 1199px){
              font-size: 16px;
            }
          }
          .text{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            &.active{
              -webkit-line-clamp: unset;
            }
            pre{
              text-wrap: wrap;
              white-space: pre-line;
              font-family: ${fontFamily.publicSnasRegular};
              margin: 0;
            }
          }
          .arrow-icon{
            min-width: 20px;
            min-height: 20px;
            height: 20px;
            background: url(${arrowIcon}) no-repeat;
            background-position: center;
            transition: .3s all ease-in-out;
            &.active{
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }
`;
