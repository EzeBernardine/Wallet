import styled from "styled-components";

export const Styles = styled.div`
  form {
    max-width: 800px;
    .input-container {
      max-width: 700px;
      margin-top: 50px;
      > div {
        width: 100%;
        .input-wrap {
          label {
            margin-right: 15px;
            color: #5b5551;
          }
        }
      }
      > fieldset {
        border: 1px solid #e1e1e1;
        label {
          white-space: nowrap;
          margin-bottom: 10px;
          color: #5b5551;
        }
      }
    }

    .btn {
      button {
        @media (max-width: 500px) {
          width: 100%;
        }
      }
      span:last-child {
        margin-left: 10px;
        display: flex;
      }
    }
  }
`;
