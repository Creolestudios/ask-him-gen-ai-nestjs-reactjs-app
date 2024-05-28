import { styled } from "styled-components";

export const BannerAddWrapper = styled.div`
  margin: 40px 0;
  text-align: center;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1440px) {
    margin: 30px 0;
  }
  @media screen and (max-width: 767px) {
    margin: 20px 0;
  }

  img {
    max-width: 910px;
    width: 100%;
    height: auto;
    display: flex;
    margin: 15px 0;
    object-fit: contain;
    @media screen and (max-width: 767px) {
      margin: 10px 0;
    }
  }
`;
