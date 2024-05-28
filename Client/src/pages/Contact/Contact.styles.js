import { styled } from "styled-components";
import { color, fontFamily } from "../../assets/css/variable";

export const ContactWrapper = styled.div`
.contact-wrapper{
    display: flex;
    padding: 20px 0 130px;
    @media screen and (max-width: 1600px){
        padding: 20px 0 120px;
    }
    @media screen and (max-width: 1440px){
        padding: 20px 0 100px;
    }
    @media screen and (max-width: 1199px){
        padding: 20px 0 80px;
    }
    @media screen and (max-width: 991px){
        padding: 20px 0 60px;
    }
    @media screen and (max-width: 767px){
        padding: 20px 0 40px;
    }
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
    .social-wrapper{
        margin-top: 40px;
        @media screen and (max-width: 1440px){
            margin-top: 30px;
        }
        .block{
            margin-bottom: 8px;
            label{
                color: ${color.primaryColor};
                font-size: 20px;
                line-height: 24px;
                font-family: ${fontFamily.firaSansCondensedBold};
                margin-right: 5px;
                text-transform: uppercase;
            }
            span{
                color: ${color.primaryColor};
                font-family: ${fontFamily.firaSansCondensedRegular};
                font-size: 22px;
                line-height: 26px;
                @media screen and (max-width: 1600px){
                    font-size: 20px;
                    line-height: 24px;
                }
            }
        }
        ul.social {
            display: flex;
            align-items: center;
            margin-top: 25px;
            @media screen and (max-width: 1440px){
                margin-top: 20px;
            }
            li {
              margin-right: 15px;
              margin-bottom: 0;
              &:last-child{
                margin-right: 0;
              }
              a, img{
                display: block;
                cursor: pointer !important;
                @media screen and (max-width: 1440px){
                    width: 32px;
                }
                @media screen and (max-width: 1199px){
                    width: 30px;
                }
                @media screen and (max-width: 767px){
                    width: 26px;
                }
              }
            }
          }
    }
    .left{
        flex: 1;
        .title{
            margin-top: 0;
            margin-bottom: 20px;
            @media screen and (max-width: 767px){
                margin-bottom: 10px;
            }
        }
    }
    .right{
        width: 550px;
        margin-left: 100px;
        @media screen and (max-width: 1600px){
            width: 500px;
            margin-left: 80px;
        }
        @media screen and (max-width: 1440px){
            width: 450px;
            margin-left: 60px;
        }
        @media screen and (max-width: 1199px){
            width: 400px;
            margin-left: 40px;
        }
        @media screen and (max-width: 991px){
            width: 380px;
            margin-left: 20px;
        }
        @media screen and (max-width: 767px){
            width: 100%;
            margin-left: 0;
            margin-top: 40px;
        }
    }
}
`;