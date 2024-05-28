import { styled } from "styled-components";
import { color, fontFamily } from "../../assets/css/variable";

export const ChatPromptWrapper = styled.div`
box-shadow: 0px 6px 26px 0px #2222221A;
padding: 17px 20px;
display: flex;
align-items: center;
border-radius: 10px;
margin-bottom: 40px;
@media screen and (max-width: 1199px){
    margin-bottom: 20px;
    padding: 15px 20px;
}
.title{
    color: ${color.greyColor1};
    margin-top: 0;
    margin-bottom: 12px;
    text-transform: capitalize;
    font-family: ${fontFamily.publicSnasRegular};
    @media screen and (max-width: 1199px){
        margin-bottom: 10px;
    }
}
.promt-input{
    flex: 1;
    margin-right: 20px;
    border-radius: 8px;
    .ant-input{
        border: 1px solid #D0D5DD;
        color: ${color.greyColor1};
        font-family: ${fontFamily.publicSnasRegular};
        padding: 5px 12px;
        box-shadow: 0px 1px 2px 0px #1018280D;
        font-size: 16px;
        line-height: 22px;
        resize: none;
        height: 95px;
        white-space: pre-line;
        @media screen and (max-width: 1199px){
            font-size: 14px;
            line-height: 20px;
            height: 85px;
        }
        &:focus{
            box-shadow: none;
        }
        &::placeholder{
            font-family: ${fontFamily.publicSnasRegular};
            color: #555555;
        }
        &:disabled{
            border-color: transparent;
            background: none;
            box-shadow: none;
            padding-left: 0;
            text-overflow: ellipsis;
        }
        &::-webkit-scrollbar{
            width: 3px;
        }
        &::-webkit-scrollbar-thumb{
            background: #ccc;
            border-radius: 10px;
        }
    }
}
.btn{
    font-family: ${fontFamily.publicSnasRegular};
    svg{
        margin-right: 5px;
        width: 16px !important;
        height: 16px !important;
    }
}
`;