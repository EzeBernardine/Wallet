import styled from "styled-components";

export const Styles = styled.div`
  min-height: 100vh;
  padding: 0 5%5%;

  > div {
    form {
      padding: 30px;
      box-shadow: 0px 0px 14px -2px #5b2e061f;
      width: 100%;
      max-width: 600px;
      > .input-container {
        margin: 20px 0;
        input {
          width: 100%;
          border: 1px solid #e1e1e1;
          padding: 10px 15px;
          border-radius: 8px;
        }
      }
      > .btn {
        margin-top: 30px;
        button {
          width: 100%;
        }
      }
    }
  }
`;
