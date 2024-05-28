import { styled } from "styled-components";
import { color } from "../../assets/css/variable";

export const LoaderWrapper = styled.div`
margin: 30px 0;
  .flexbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 10px 0;
    > div {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      overflow: hidden;
    }
    .dot-loader {
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background-color: ${color.primaryColor};
      position: relative;
      -webkit-animation: 1.2s grow ease-in-out infinite;
      animation: 1.2s grow ease-in-out infinite;
      &.dot-loader--2 {
        -webkit-animation: 1.2s grow ease-in-out infinite 0.15555s;
        animation: 1.2s grow ease-in-out infinite 0.15555s;
        margin: 0 5px;
      }
      &.dot-loader--3 {
        -webkit-animation: 1.2s grow ease-in-out infinite 0.3s;
        animation: 1.2s grow ease-in-out infinite 0.3s;
      }
    }
  }

  @-webkit-keyframes grow {
    0%,
    40%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes grow {
    0%,
    40%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
