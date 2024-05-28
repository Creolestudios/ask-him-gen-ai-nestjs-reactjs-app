import { styled } from "styled-components";
import { color, fontFamily } from "../../assets/css/variable";

export const PaginationWrapper = styled.div`
 ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 12px 24px;
    border: 1px solid #EAECF0;
    border-top: 0;
    border-radius: 0 0 8px 8px;

    @media screen and (max-width: 1199px){
      padding: 12px 20px;
    }

    .label-text{
        font-size: 14px;
        width: auto !important;
        border: none;
        margin-right: 20px;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
      width: 26px;
      height: 26px;
      margin: auto 4px;
      letter-spacing: 0.01071em;
      border-radius: 4px;
      font-size: 14px;
      min-width: 32px;
      font-family: ${fontFamily.publicSnasMedium};
      border: 1px solid ${color.primaryColor};
      color: ${color.primaryColor};
      cursor: pointer !important;
      &:first-child{
        margin-right: auto;
        width: auto !important;
        border: none;
      }
      &:last-child{
        margin-left: auto;
        width: auto !important;
        border: none;
      }

      &.dots:hover {
        background-color: transparent;
        cursor: default;
      }

      &.selected {
        background: ${color.primaryColor};
        color: ${color.whiteColor};
      }

      .arrow {
        &.left {
          margin-right: auto;
          border: 1px solid #D0D5DD;
          border-radius: 8px;
          padding: 8px 14px;
          cursor: pointer !important;
          
        }
        &.right {
          margin-left: auto;
          border: 1px solid #D0D5DD;
          border-radius: 8px;
          padding: 8px 14px;
          cursor: pointer !important;
        }
      }

      &.disabled {
        pointer-events: none;
        opacity: .5;

        .arrow::before {
          border-right: 0.12em solid rgba(0, 0, 0, 0.43);
          border-top: 0.12em solid rgba(0, 0, 0, 0.43);
        }

        &:hover {
          background-color: transparent;
          cursor: default;
        }
      }
    }
  }
`;
