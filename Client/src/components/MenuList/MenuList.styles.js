import { styled } from "styled-components";
import { color, fontFamily } from "../../assets/css/variable";

export const MenuListWrapper = styled.div`
ul{
    display: flex;
    li{
        margin-right: 42px;
        @media screen and (max-width: 1199px){
            margin-right: 30px;
        }
        a{
            color: ${color.whiteColor};
            text-decoration: none;
            cursor: pointer !important;
            text-transform: capitalize;
            font-family: ${fontFamily.firaSansSemiBold};
            &.active{
                font-family: ${fontFamily.firaSansBold};
                color: ${color.secondaryColor};
            }
        }
        &:hover{
            a{
                color: ${color.secondaryColor};
            }
        }
        &:last-child{
            @media screen and (max-width: 1199px){
                margin-right: 20px;
            }
        }
    }
}
`;