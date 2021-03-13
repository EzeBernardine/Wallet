import styled from "styled-components";

export const Styles = styled.div`
  .card {
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px -2px #5b2e061f;
    h4 {
      margin: 20px 0;
    }
    :hover {
      box-shadow: 0px 0px 22px -2px #5b2e061f;
      transform: translateX(-2px);
      transition: 300ms linear;
    }
  }
`;
