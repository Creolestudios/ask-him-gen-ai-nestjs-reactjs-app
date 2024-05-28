import { styled } from "styled-components";
import { color, fontFamily } from "../../assets/css/variable";

export const InformationWrapper = styled.div`
padding: 100px 100px;
@media screen and (max-width: 1440px){
    padding: 50px 15px 60px;
}
@media screen and (max-width: 1199px){
    padding: 50px 0 60px;
}
@media screen and (max-width: 991px){
    padding: 40px 0 50px;
}
@media screen and (max-width: 767px){
    padding: 40px 0;
}
.information-wrapper{
    .item{
        display: flex;
        margin-bottom: 50px;
        @media screen and (max-width: 767px){
            flex-direction: column-reverse;
        }
        .content{
            padding-right: 50px;
            width: 50%;
            @media screen and (max-width: 767px){
                width: 100%;
                padding-right: 0;
            }
            h2{
                margin-top: 15px;
            }
            p{
                color: ${color.greyColor1};
                margin-top: 0;
                margin-bottom: 15px;
                font-family: ${fontFamily.firaSansRegular};
            }
        }
        img{
            width: 50%;
            border-radius: 10px;
            filter: grayscale(1);
            object-fit: cover;
            @media screen and (max-width: 767px){
                width: 100%;
                height: 320px;
            }
            @media screen and (max-width: 600px){
                height: 250px;
            }
        }
        &:nth-child(even){
            flex-direction: row-reverse;
            @media screen and (max-width: 767px){
                flex-direction: column-reverse;
            }
            .content{
                padding-right: 0;
                padding-left: 50px;
                @media screen and (max-width: 767px){
                    padding-left: 0;
                }
               
            }
        }
    }   
}
`;