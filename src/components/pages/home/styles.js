import styled from "styled-components";

export const Styles = styled.div`
  min-height: 100vh;
  padding: 0 5%;
  display: flex;

  > div {
    max-width: 1300px;
    .title {
      p {
        padding-top: 15px;
      }
    }

    @media (max-width: 1000px) {
      flex-direction: column-reverse;
      > div {
        width: 100%;
      }
      > div:last-child {
        max-width: 600px;
        margin-bottom: 50px;
      }
    }
  }
`;
