import styled from "styled-components";

export const Styles = styled.div`
 
 .transaction-dates {
      position: relative;
      flex:1;
     > div{
       padding: 0 10px;
        span{
        white-space: nowrap;
        min-width: max-content;
        margin-top: 10px;
      }
     }
      :after {
        position: absolute;
        top: 0;
        bottom: 0;
        background: #5b5551;
        width: 1px;
        right: 0;
        left: 0;
        margin: auto;
        content: "";
      }
      @media (max-width: 980px) {
        margin: 30px 0 0 0
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
