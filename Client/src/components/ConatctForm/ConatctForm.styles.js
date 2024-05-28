import { styled } from "styled-components";
import { fontFamily } from "../../assets/css/variable";

export const ContactFormWrapper = styled.div`
    background: #F5F5F5;
    padding: 20px;
    border-radius: 10px;
    .success-mail{
        position: fixed;
        top: 118px;
        left: 50%;
        max-width: 600px;
        width: 95%;
        text-align: center;
        transform: translateX(-50%);
        z-index: 9999;
        background: #009300;
        color: #fff;
        border-radius: 5px;
        font-size: 18px;
        padding: 8px 20px;
        font-family: ${fontFamily.firaSansCondensedMedium};
        letter-spacing: 1px;
        transition: .3 all ease-in-out;
    }
`;