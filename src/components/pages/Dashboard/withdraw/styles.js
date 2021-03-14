import styled from "styled-components";

export const Styles = styled.div`
  .input-container {
    max-width: 700px;
    margin-top: 50px;
    > div {
      width: 100%;
      .input-wrap {
        width: 100%;
        label {
          margin-right: 15px;
          color: #5b5551;
        }
        input {
          border: 1px solid #e1e1e1;
          flex: 1;
          padding: 10px 15px;
          border-radius: 8px;
          /* max-width: 450px */
        }
        textarea {
          border: 1px solid #e1e1e1;
          flex: 1;
          padding: 10px 15px;
          resize: none;
          border-radius: 8px;
        }
      }
    }
  }

  .btn span:first-child {
    margin-right: 10px;
  }
`;
