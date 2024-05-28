import { styled } from "styled-components";
import { color } from "../../assets/css/variable";

export const AboutWrapper = styled.div`
/* padding: 150px 0; */
.about-wrapper{
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
    .single-column{
        margin-bottom: 70px;
        @media screen and (max-width: 1440px){
            margin-bottom: 60px;
        }
        @media screen and (max-width: 1199px){
            margin-bottom: 50px;
        }
        @media screen and (max-width: 767px){
            margin-bottom: 30px;
        }
    }
    .two-column{
        display: flex;
        @media screen and (max-width: 767px){
            flex-direction: column-reverse;
        }
        .left{
            flex: 1;
        }
        .right{
            width: 300px;
            margin-left: 100px;
            @media screen and (max-width: 1600px){
                margin-left: 90px;
            }
            @media screen and (max-width: 1440px){
                width: 250px;
                margin-left: 70px;
            }
            @media screen and (max-width: 1199px){
                margin-left: 50px;
            }
            @media screen and (max-width: 991px){
                margin-left: 40px;
            }
            @media screen and (max-width: 767px){
                max-width: 300px;
                width: 100%;
                margin: 0 auto 20px;
            }
        }
    }
    h2{
        margin-top: 0;
        margin-bottom: 15px;
        @media screen and (max-width: 767px){
            margin-bottom: 10px;
        }
    }
    p{
        margin-top: 0;
        margin-bottom: 20px;
        color: ${color.greyColor1};
    }
}
`;