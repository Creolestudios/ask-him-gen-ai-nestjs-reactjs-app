import { styled } from "styled-components";
import { color } from "../../assets/css/variable";
import askingBG from '../../assets/images/asking-bg.webp';
import logo from '../../assets/images/logo.svg';
import logoBack from '../../assets/images/logo-bg.png';

export const AskingHomeWrapper = styled.div`
padding: 100px 0;
margin-top: 100px;
background: url(${askingBG});
background-repeat: no-repeat;
@media screen and (max-width: 1440px){
    padding: 90px 0 60px;
    margin-top: 80px;
}
@media screen and (max-width: 1199px){
    padding: 80px 0 60px;
    margin-top: 60px;
}
@media screen and (max-width: 991px){
    padding: 60px 0 50px;
    margin-top: 40px;
}
@media screen and (max-width: 767px){
    padding: 50px 0;
    margin-top: 0;
}
.asking-wrapper{
    display: flex;
    align-items: center;
    @media screen and (max-width: 1199px){
        flex-direction: column;
    }
    .title{
        color: ${color.whiteColor};
        margin-top: 0;
        margin-bottom: 15px;
    }
    p{
        margin-top: 0;
        margin-bottom: 20px;
        color: ${color.whiteColor};
    }
    .left-content{
        padding-right: 20px;
        width: 475px;
        @media screen and (max-width: 1440px){
            width: 400px;
        }
        @media screen and (max-width: 1199px){
            width: 100%;
        }
    }
    .right-content{
        flex: 1;
        .list-asking{
            display: flex;
            flex-wrap: wrap;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: url(${logoBack});
                background-repeat: no-repeat;
                background-position: left 148px top 310px;
                background-size: 70%;
                z-index: 1;
                opacity: .1;
                filter: brightness(0.5);
                @media screen and (max-width: 1440px){
                    background-position: left 148px top 226px;
                    background-size: 62%;
                }
                @media screen and (max-width: 1199px){
                    background-position: left 273px top 160px;
                    background-size: 55%;
                }
                @media screen and (max-width: 991px){
                    background-position: left 215px top 200px;
                }
                @media screen and (max-width: 767px){
                    display: none;
                }
            }
            .item{
                padding: 10px;
                width: 50%;
                @media screen and (max-width: 767px){
                    width: 100%;
                    padding: 5px 0;
                }
                .content{
                    position: relative;
                    width: 100%;
                    min-height: 490px;
                    background: ${color.whiteColor};
                    padding: 40px;
                    border-radius: 14px;
                    @media screen and (max-width: 1600px){
                        min-height: 400px;
                        padding: 30px;
                    }
                    @media screen and (max-width: 1440px){
                        min-height: 320px;
                        padding: 25px;
                    }
                    @media screen and (max-width: 1199px){
                        min-height: 300px;
                        padding: 20px;
                    }
                    @media screen and (max-width: 767px){
                        min-height: auto;
                        padding: 20px 15px;
                    }
                    .title{
                        color: ${color.greyColor1};
                        margin-top: 0;
                        margin-bottom: 15px;
                    }
                    p{
                        color: ${color.greyColor1};
                        margin-top: 0;
                        margin-bottom: 20px;
                       
                    }
                    .primary-btn{
                        margin-top: 40px;
                        display: inline-block;
                        position: relative;
                        z-index: 2;
                        @media screen and (max-width: 1440px){
                            margin-top: 30px;
                        }
                        @media screen and (max-width: 991px){
                            margin-top: 10px;
                        }
                    }
                }
                &:last-child{
                    .content{
                        background: linear-gradient(180deg, #2B446C 0%, #0B1C39 100%);
                        @media screen and (max-width: 1440px){
                            min-height: 100%;
                        }
                        @media screen and (max-width: 767px){
                            min-height: 250px;
                        }
                        &::before{
                            content: '';
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            left: 0;
                            top: 0;
                            background-image: url(${logo});
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: 60%;
                            @media screen and (max-width: 1199px){
                                background-size: 200px;
                            }
                            @media screen and (max-width: 991px){
                                background-size: 160px;
                            }
                        }
                    }
                }
            }
        }
    }
}
`;