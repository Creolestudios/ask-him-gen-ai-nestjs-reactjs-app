import { styled } from "styled-components";
import { color, fontFamily } from "../../../assets/css/variable";

export const QuestionSetWrapper = styled.div`
.header{
    background: #F9FAFB;
    border: 1px solid #EAECF0;
    border-radius: 8px 8px 0 0;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    height: 50px;
    .title{
        font-size: 20px;
        line-height: 35px;
        color: ${color.primaryColor};
        text-transform: capitalize;
        font-family: ${fontFamily.publicSnasSemiBold};
        margin-right: 20px;
    }
    .btn-wrapper{

        margin-left: auto;
        button{
            margin-left: 15px;
            outline: none;
            border: none;
            background: ${color.primaryColor};
            border: 1px solid ${color.primaryColor};
            padding: 10px 30px;
            border-radius: 8px;
            color: ${color.whiteColor};
            font-size: 15px;
            font-family: ${fontFamily.publicSnasMedium};
            letter-spacing: .15px;
            transition: .2s all ease-in-out;
            cursor: pointer !important;
            &.cancel{
                background: #F0F0F0;
                border-color: #F0F0F0;
                color: ${color.greyColor1};
            }
        }
    }
}
.content{
    box-shadow: 0px 6px 26px 0px #2222221A;
    padding: 10px 10px 10px 10px;
    overflow: auto;
    height: calc(100vh - 468px);
    @media screen and (max-width: 1440px){
        height: calc(100vh - 405px);
    }
    @media screen and (max-width: 1199px){
        height: calc(100vh - 330px);
        padding: 5px;
    }
    .question-wrap{
        padding: 30px 10px;
        background: #F9F9F9;
        border: 1px solid #EFEFEF;
        border-radius: 8px;
        .input-field{
            margin-bottom: 20px;
            .question{
                font-size: 18px;
                line-height: 20px;
                color: #555;
                font-family: ${fontFamily.publicSnasMedium};
                margin-bottom: 5px;
                padding: 3px 0;
                &.editable{
                    padding: 5px;
                }
                span{
                    margin-right: 5px;
                }
            }
            .answer{
                font-size: 16px;
                line-height: 20px;
                font-family: ${fontFamily.publicSnasRegular};
                color: #555;
                padding: 3px 0;
                &.editable{
                    padding: 5px;
                }
            }
        }
    }
    textarea{
        padding: 30px 10px 15px;
        background: #F9F9F9;
        border: 1px solid #EFEFEF;
        color: ${color.greyColor1};
        font-size: 16px;
        height: 100%;
        font-family: ${fontFamily.publicSnasRegular};
        @media screen and (max-width: 1199px){
            padding-top: 10px;
            font-size: 15px;
        }
        &:focus{
            box-shadow: none;
        }
        &:disabled{
            background: transparent;
            border-color: transparent;
        }
        &::-webkit-scrollbar{
            width: 5px;
        }
        &::-webkit-scrollbar-thumb{
            background: #B9B9B9;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background: transparent;
        }
    }
}
`;