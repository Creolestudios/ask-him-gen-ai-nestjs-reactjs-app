import { styled } from "styled-components";
import { color, fontFamily } from "../../../assets/css/variable";

export const SidebarWrapper = styled.div`
height: calc(100vh - 100px);
overflow-y: auto;
background: ${color.primaryColor};
@media screen and (max-width: 1440px){
    height: calc(100vh - 80px);
}
@media screen and (max-width: 1199px){
    height: calc(100vh - 60px);
}

.login-text{
    color: ${color.whiteColor};
    text-align: center;
}

ul{
    padding: 30px 0;
    @media screen and (max-width: 1199px){
        padding: 20px 0;
    }
    li{
        a{
            height: 55px;
            text-decoration: none;
            background: transparent;
            position: relative;
            padding: 0 20px 0 70px;
            display: flex;
            align-items: center;
            color: #A4A6B3;
            cursor: pointer !important;
            font-family: ${fontFamily.publicSnasRegular};
            font-size: 16px;
            letter-spacing: .2px;
            text-transform: capitalize;
            @media screen and (max-width: 1440px){
                padding: 0 20px 0 50px;
            }
            &.active{
                background: #334D76;
                color: #B4CAEC;
                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 3px;
                    height: 100%;
                    background: #DDE2FF;
                }
            }

        }
    }
}
`;