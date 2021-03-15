import styled from "styled-components";

export const Styles = styled.div`
  .balance {
    background: linear-gradient(#ded330, #de8430); // #de8430;
    /* width: 300px; */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px 0 hsla(198, 45%, 10%, 0.12);
    .time-duration {
      position: relative;
      :after {
        position: absolute;
        top: 0;
        bottom: 0;
        background: #fdf1e9;
        width: 1px;
        right: 0;
        left: 0;
        margin: auto;
        content: "";
      }
    }
    .wallet-icon h5 {
      padding-left: 10px;
    }
    .amount {
      box-shadow: 0 2px 5px 4px hsla(204, 10.6%, 9.2%, 0.13);
      background: #fff;
      border-radius: 8px;
      padding: 10px;
      overflow-x: auto;
      h3 {
        white-space: nowrap;
      }
    }
  }

`;
