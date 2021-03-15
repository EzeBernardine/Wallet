import styled from "styled-components";

export const Styles = styled.header`
  height: 70px;
  padding: 0 5%;
  width: 100%;
  position: fixed;
  background: white;
  z-index: 100;
  right: 0;
  left: 0;
  top: 0;
  > div {
    span {
      margin-left: 15px;
    }
  }
  @media (max-width: 500px) {
    .welcomeNote {
      display: none;
    }
  }
`;
