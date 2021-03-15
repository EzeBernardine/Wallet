import styled from "styled-components";

export const Styles = styled.div`
  .balance {
    background: linear-gradient(#ded330, #de8430);// #de8430;
    /* width: 300px; */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px 0 hsla(198, 45%, 10%, 0.12);

    > div {
      box-shadow: 0 2px 5px 4px hsla(204, 10.6%, 9.2%, 0.13);
      background: #fff;
      border-radius: 8px;
      padding: 10px;
      overflow-x: auto
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
