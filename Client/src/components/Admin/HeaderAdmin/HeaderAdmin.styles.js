import { styled } from "styled-components";
import { color, fontFamily } from "../../../assets/css/variable";

export const HeaderAdminWrapper = styled.div`
height: 100px;
background: ${color.whiteColor};
padding: 0 30px 0 70px;
border-bottom: 1px solid #CFCFCF;
display: flex;
align-items: center;
@media screen and (max-width: 1440px){
    padding: 0 30px 0 30px;
    height: 80px;
}
@media screen and (max-width: 1199px){
    padding: 0 20px 0 20px;
    height: 60px;
}
.user{
    font-family: ${fontFamily.publicSnasBold};
    font-size: 24px;
    color: ${color.blackColor};
    display: flex;
    align-items: center;
    margin-right: 15px;
    text-transform: capitalize;
    @media screen and (max-width: 1440px){
        font-size: 20px;
    }
    @media screen and (max-width: 1199px){
        font-size: 18px;
    }
    img{
        margin-left: 5px;
        @media screen and (max-width: 1440px){
            width: 30px;
        }
        
    }
}
.logout-btn{
    cursor: pointer !important;
    /* margin-right: 20px; */
    .ant-btn{
        height: 40px !important;
        font-size: 16px;
        padding: 0 25px;
    }
}
.user-avatar{
    margin-left: auto;
    display: flex;
    align-items: center;
    .ant-avatar{
        @media screen and (max-width: 1199px){
            width: 40px !important;
            height: 40px !important;
        }
        span{
            position: unset;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
}
`;