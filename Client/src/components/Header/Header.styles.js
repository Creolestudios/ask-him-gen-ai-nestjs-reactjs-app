import { styled } from "styled-components";
import { color } from "../../assets/css/variable";

export const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
    z-index: 9999;
    height: 130px;
    display: flex;
    align-items: center;
    background: ${color.primaryColor};
    color: ${color.whiteColor};
    transition: .2s all ease-in-out;
    @media screen and (max-width: 1600px){
        height: 120px;
    }
    @media screen and (max-width: 1440px){
        height: 110px;
    }
    @media screen and (max-width: 1199px){
        height: 100px;
    }
    @media screen and (max-width: 991px){
        height: 80px;
    }
    .container{
        background: ${color.primaryColor};
            .header-wrapper{
                @media screen and (max-width: 767px){
                    background: ${color.primaryColor};
                    padding: 18px 0;
                }
            }
    }
    .header-wrapper{
        display: flex;
        align-items: center;
        .logo{
            margin-right: 20px;
            width: 142px;
            height: auto;
            cursor: pointer !important;
            position: relative;
            z-index: 999;
            background: #2B4267;
            @media screen and (max-width: 1440px){
                width: 120px;
            }
            @media screen and (max-width: 1199px){
                width: 100px;
            }
            @media screen and (max-width: 767px){
                width: 80px;
            }
        }
        .humberger-menu{
            width: 25px;
            height: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer !important;
            margin-left: auto;
            position: relative;
            z-index: 999;
            @media screen and (min-width: 768px){
                display: none;
            }
            >span{
                width: 25px;
                height: 1.5px;
                background: ${color.whiteColor};
                display: flex;
                position: relative;
                border-radius: 40px;
                cursor: pointer !important;
                transition: .3s all ease-in-out;
                &::before{
                    content: '';
                    position: absolute;
                    top: -6px;
                    left: 0;
                    width: 25px;
                    height: 1.5px;
                    background: ${color.whiteColor};
                    display: flex;
                    margin-bottom: 10px;
                    border-radius: 40px;
                    cursor: pointer !important;
                }
                &::after{
                    content: '';
                    position: absolute;
                    bottom: -6px;
                    left: 0;
                    width: 25px;
                    height: 1.5px;
                    background: ${color.whiteColor};
                    border-radius: 40px;
                    cursor: pointer !important;
                }
            }
            &.open{
                span{
                    background: ${color.primaryColor};
                    width: 0;
                    &::before{
                        left: -15px;
                        transform: translate(0, 3px) rotate(-45deg);
                    }
                    &::after{
                        left: -15px;
                        transform: translate(0, -8px) rotate(45deg);
                    }
                }
            }
        }
        .header-right{
            margin-left: auto;
            display: flex;
            align-items: center;
            .btn{
                margin-left: 15px;
            }
            &.mobile-menu{
                position: fixed;
                top: -100%;
                left: 0;
                width: 100%;
                height: auto;
                background: ${color.primaryColor};
                padding: 100px 20px 50px;
                flex-direction: column;
                align-items: flex-start;
                z-index: -1;
                border-radius: 0 0 10px 10px;
                box-shadow: 0px 10px 14px 0px #00000026;
                transition: .4s all ease-in-out;
                .mobile-list{
                    width: 100%;
                    ul{
                        flex-direction: column;
                        li{
                            margin-bottom: 24px;
                            font-size: 18px;
                        }
                    }
                }
                .btn{
                    margin: 10px 0 0;
                }
                &.open{
                    top: 0;
                }
            }
        }
    }
`;