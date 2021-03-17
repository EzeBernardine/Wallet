import styled from "styled-components";

export const Styles = styled.div`
  min-height: 100vh;
  width: calc(100% - 240px);
  margin: 0 0 0 auto;

  > section {
    padding: 50px;
    margin: 70px auto;
    max-width: 1100px;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 136px;
    > section {
      margin: 20px 0;
      padding: 20px 5%;
    }
  }
`;
