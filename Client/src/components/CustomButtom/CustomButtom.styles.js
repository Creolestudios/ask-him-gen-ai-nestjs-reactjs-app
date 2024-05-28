import { styled } from "styled-components";
import { color, fontFamily } from "../../assets/css/variable";

export const CustomButtonWrapper = styled.div`
.ant-btn{
    height:  ${props => (props?.height ? props?.height : `48px`)};
    padding: 0 25px;
    border-radius: 40px;
    background: ${props => (props.background ? props.background : color.secondaryColor)};
    text-transform: capitalize;
    outline: none;
    border: none;
    font-size: 16px;
    font-family: ${fontFamily.firaSansMedium};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer !important;
    span{
        color: ${props => (props.color ? props.color : color.greyColor1)};
        line-height: 1;
        cursor: pointer !important;
        margin-left: 0;
    }
    .anticon{
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            width: 28px;
            height: auto;
            cursor: pointer !important;
            path{
                cursor: pointer !important;
            }
        }
    }
}
&.no-text{
    .ant-btn{
        min-width: 70px;
        padding: 0 8px 0 8px !important;
        .anticon{
            background: none !important;
            margin-right: 0 !important;
            svg{
                width: 16px;
                height: 16px;
            }
        }
    }
}
&.btn{
    .ant-btn{
        border: 2px solid ${color.secondaryColor};
        @media screen and (max-width: 1199px){
            height: 45px;
            padding: 0 20px
        }
        &:hover{
            background: ${color.whiteColor};
            border-color: ${color.secondaryColor};
        }
    }
}
&.secondary-btn{
    .ant-btn{
        background: linear-gradient(180deg, #496186 0%, #1C293F 100%);
        padding: 0 42px 0 12px;
        font-size: 26px;
        @media screen and (max-width: 1600px){
            font-size: 24px;
        }
        @media screen and (max-width: 1440px){
            font-size: 22px;
            height: 65px;
            padding: 0 35px 0 8px;
        }
        @media screen and (max-width: 1199px){
            font-size: 20px;
            height: 60px;
            padding: 0 30px 0 8px;
        }
        @media screen and (max-width: 991px){
            font-size: 18px;
            height: 55px;
        }
        @media screen and (max-width: 767px){
            height: 48px;
            font-size: 16px;
            padding: 0 20px 0 8px;
        }
        span{
            color: ${color.whiteColor};
        }
        .anticon{
            margin-right: 15px;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: #3D5173;
            @media screen and (max-width: 1440px){
                width: 55px;
                height: 55px;
            }
            @media screen and (max-width: 1199px){
                width: 50px;
                height: 50px;
            }
            @media screen and (max-width: 991px){
                width: 45px;
                height: 45px;
            }
            @media screen and (max-width: 767px){
                width: 35px;
                height: 35px;
                margin-right: 10px;
            }
            svg{
                width: 45px;
                @media screen and (max-width: 1440px){
                    width: 40px;
                }
                @media screen and (max-width: 1199px){
                    width: 36px;
                }
                @media screen and (max-width: 991px){
                    width: 30px;
                }
                @media screen and (max-width: 767px){
                    width: 24px;
                }
                path{
                    fill: #fff;
                }
            }
        }
    }
    &.small{
        .ant-btn{
            font-size: 18px;
            padding: 0 16px 0 8px;
            .anticon{
                width: 45px;
                height: 45px;  
                svg{
                    width: 30px;
                } 
            }
        }
    }
}
&.primary-btn{
    .ant-btn{
        border: 2px solid ${color.secondaryColor};
        padding: 0 50px 0 30px;
        font-size: 26px;
        @media screen and (max-width: 1600px){
            font-size: 24px;
        }
        @media screen and (max-width: 1440px){
            font-size: 22px;
            height: 65px;
            padding: 0 35px 0 15px;
        }
        @media screen and (max-width: 1199px){
            font-size: 20px;
            height: 60px;
            padding: 0 30px 0 15px;
        }
        @media screen and (max-width: 991px){
            font-size: 18px;
            height: 55px;
        }
        @media screen and (max-width: 767px){
            height: 48px;
            font-size: 16px;
            padding: 0 20px 0 15px;
        }
        .anticon{
            margin-right: 15px;
            svg{
                width: 45px;
                @media screen and (max-width: 1440px){
                    width: 40px;
                }
                @media screen and (max-width: 1199px){
                    width: 36px;
                }
                @media screen and (max-width: 991px){
                    width: 30px;
                }
                @media screen and (max-width: 767px){
                    width: 24px;
                }
                path{
                    fill: ${color.greyColor1};
                }
            }
        }
        &:hover{
            background: ${color.whiteColor};
            border-color: ${color.secondaryColor};
        }
    }
}
`;