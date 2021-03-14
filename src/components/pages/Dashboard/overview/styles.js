import styled from "styled-components";

export const Styles = styled.div`
  > .warning {
    p {
      color: #de8430 !important;
    }
  }
  > .success {
    background: #56de301f;
    padding: 5px 10px;
    border: 1px solid #2bac205e;
    border-radius: 4px;
    p {
      color: #2bac20 !important;
    }
  }
  .card {
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 hsla(198, 45%, 10%, 0.12);
    h4 {
      margin: 20px 0;
    }
    :hover {
      box-shadow: 0 2px 10px 0 hsla(198, 45%, 10%, 0.12);
      transform: translateX(-2px);
      transition: 300ms linear;
    }
  }
`;
