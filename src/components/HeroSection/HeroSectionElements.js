import styled from "styled-components";

export const Wrapper = styled.section`
  background: linear-gradient(180deg, #ff4d4d 0%, rgba(255, 37, 102, 0.8) 100%);
  height: 50vh;

  @media screen and (max-width: 768px) {
    height: 35vh;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Main = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 40px;
  font-style: normal;
  line-height: normal;
  font-family: "Timmana", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
`;
