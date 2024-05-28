import { styled } from "styled-components";
import { color } from "../../assets/css/variable";
import banner from "../../assets/images/content-bg.png";
import prevButton from "../../assets/images/left.png";
import nextButton from "../../assets/images/right.png";

export const BannerSliderWrapper = styled.div`
  .swiper {
    background: #f9f9f9;
    .swiper-wrapper {
      height: 845px;
      @media screen and (max-width: 1440px) {
        height: 760px;
      }
      @media screen and (max-width: 1199px) {
        height: 640px;
      }
      @media screen and (max-width: 991px) {
        height: 540px;
      }
      @media screen and (max-width: 767px) {
        height: 400px;
      }
      .swiper-slide {
        .item {
          position: relative;
          height: 735px;
          display: flex;
          align-items: center;
          background-repeat: no-repeat !important;
          background-size: cover !important;
          background-position: center !important;
          padding: 0 150px;
          @media screen and (max-width: 1600px) {
            padding: 0 120px;
          }
          @media screen and (max-width: 1440px) {
            padding: 0 90px;
            height: 680px;
          }
          @media screen and (max-width: 1199px) {
            padding: 0 60px;
            height: 560px;
          }
          @media screen and (max-width: 991px) {
            padding: 0 40px;
            height: 460px;
          }
          @media screen and (max-width: 767px) {
            padding: 0 15px;
            height: 350px;
          }
          .content {
            max-width: 1100px;
            width: 100%;
            background: url(${banner});
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 35px 210px 60px 50px;
            position: absolute;
            bottom: 100px;
            transform: translateY(-50%);
            @media screen and (max-width: 1440px) {
              max-width: 991px;
            }
            @media screen and (max-width: 1199px) {
              max-width: 767px;
            }
            @media screen and (max-width: 991px) {
              padding: 30px 180px 50px 40px;
              bottom: -20px;
            }
            @media screen and (max-width: 767px) {
              max-width: 500px;
              padding: 20px 100px 30px 30px;
              bottom: -35px;
            }
            h1 {
              margin: 0;
              color: ${color.greyColor1};
              margin-bottom: 20px;
            }
            .ant-btn {
              margin: 0 0 0 auto;
            }
          }
        }
      }
    }
    .swiper-pagination {
      height: 110px;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1440px) {
        height: 80px;
      }
      @media screen and (max-width: 767px) {
        height: 55px;
      }
      .swiper-pagination-bullet {
        background: #d9d9d9;
        width: 8px;
        height: 8px;
        opacity: 1;
        transition: 0.2s all ease-in-out;
        &.swiper-pagination-bullet-active {
          background: #2b4267;
          width: 40px;
          border-radius: 6px;
        }
      }
    }
    .swiper-button-prev {
      left: 160px;
      bottom: 280px;
      top: unset;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid #979797;
      cursor: pointer !important;
      @media screen and (max-width: 1600px) {
        left: 135px;
      }
      @media screen and (max-width: 1440px) {
        left: 100px;
        bottom: 260px;
      }
      @media screen and (max-width: 1199px) {
        left: 70px;
        width: 45px;
        height: 45px;
      }
      @media screen and (max-width: 991px) {
        left: 45px;
        bottom: 150px;
        width: 40px;
        height: 40px;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background: url(${prevButton});
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer !important;
        @media screen and (max-width: 1199px) {
          background-size: 100%;
          width: 18px;
          height: 18px;
        }
        @media screen and (max-width: 991px) {
          width: 20px;
          height: 20px;
        }
      }
    }
    .swiper-button-next {
      right: unset;
      left: 230px;
      bottom: 280px;
      top: unset;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid #979797;
      cursor: pointer !important;
      @media screen and (max-width: 1600px) {
        left: 200px;
      }
      @media screen and (max-width: 1440px) {
        left: 165px;
        bottom: 260px;
      }
      @media screen and (max-width: 1199px) {
        left: 130px;
        width: 45px;
        height: 45px;
      }
      @media screen and (max-width: 991px) {
        left: 100px;
        bottom: 150px;
        width: 40px;
        height: 40px;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background: url(${nextButton});
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer !important;
        @media screen and (max-width: 1199px) {
          background-size: 100%;
          width: 18px;
          height: 18px;
        }
        @media screen and (max-width: 991px) {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
