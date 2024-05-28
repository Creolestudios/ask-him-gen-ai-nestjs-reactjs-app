import { styled } from "styled-components";

export const ChatHomeWrapper = styled.div`
    padding: 130px 0 100px;
    @media screen and (max-width: 1440px){
        padding: 100px 0 80px;
    }
    @media screen and (max-width: 1199px){
        padding: 80px 0 60px;
    }
    @media screen and (max-width: 991px){
        padding: 60px 0 60px;
    }
    .chat-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 440px;
            @media screen and (max-width: 1440px){
                width: 380px;
            }
            @media screen and (max-width: 1199px){
                width: 300px;
            }
            @media screen and (max-width: 991px){
                width: 280px;
            }
            @media screen and (max-width: 767px){
                width: 200px;
            }
        }
        .primary-btn{
            margin-top: 60px;
            @media screen and (max-width: 767px){
                margin-top: 40px;
            }
        }
    }
`;