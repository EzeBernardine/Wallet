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
            color: #5b5551
          }
          input {
            border: 1px solid #e1e1e1;
            flex: 1;
            padding: 10px 15px;
            border-radius: 8px;
          }
        }
      }
      > fieldset {
        border: 1px solid #e1e1e1;
        label {
          white-space: nowrap;
          margin-bottom: 10px;
          color: #5b5551
        }
      }
    }

    .btn span:first-child {
      margin-right: 10px;
    }
  }
`;
