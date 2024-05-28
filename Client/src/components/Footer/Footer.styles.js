import { styled } from 'styled-components';
import { color, fontFamily } from '../../assets/css/variable';

export const FooterWrapper = styled.div`
  background: ${color.primaryColor};

  .footer-content {
    display: flex;
    flex-direction: column;
    .footer-top {
      padding: 50px 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ffffff33;
      @media screen and (max-width: 1440px) {
        padding: 40px 0;
      }
      @media screen and (max-width: 1199px) {
        padding: 30px 0;
      }
      @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 20px 0;
      }
      .logo {
        margin-right: 20px;
        @media screen and (max-width: 767px) {
          margin-right: auto;
          margin-bottom: 20px;
          width: 100px;
        }
      }
      .footer-top-right {
        margin-left: auto;
        display: flex;
        @media screen and (max-width: 767px) {
          margin-left: unset;
          width: 100%;
          justify-content: space-between;
          margin-top: 20px;
        }
        ul {
          display: flex;
          flex-direction: column;
          li {
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            a {
              font-family: ${fontFamily.firaSansRegular};
              font-size: 18px;
              line-height: 22px;
              transition: 0.2s all ease-in-out;
              img {
                @media screen and (max-width: 767px) {
                  width: 26px;
                }
              }
            }
            /* &:hover{
                a{
                    color: ${color.secondaryColor};
                }
            } */
          }
        }
        .social-wrapper {
          margin-left: 85px;
          .title {
            color: ${color.whiteColor};
            font-family: ${fontFamily.firaSansRegular};
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 15px;
          }
          ul {
            display: flex;
            align-items: center;
            flex-direction: row;
            li {
              margin-right: 15px;
              margin-bottom: 0;
              &:last-child {
                margin-right: 0;
              }
              a,
              img {
                display: block;
                cursor: pointer !important;
              }
            }
          }
        }
      }
    }
    .footer-bottom {
      padding: 30px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1440px) {
        padding: 25px 0;
      }
      @media screen and (max-width: 1199px) {
        padding: 20px 0;
      }
      @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 15px 0 20px;
      }
      p {
        font-size: 18px;
        line-height: 27px;
        margin: 0;
        color: ${color.whiteColor};
        @media screen and (max-width: 1440px) {
          font-size: 16px;
          line-height: 24px;
        }
        @media screen and (max-width: 767px) {
          margin-bottom: 15px;
          font-size: 15px;
          line-height: 22px;
        }
      }
      img {
        cursor: pointer !important;
      }
    }
  }
`;
