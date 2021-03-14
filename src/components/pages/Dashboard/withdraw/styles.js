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
        input,
        textarea {
          border: 1px solid #e1e1e1;
          flex: 1;
          padding: 10px 15px;
          resize: none;
          border-radius: 8px;
          max-width: 450px;
        }
      
        @media (max-width: 650px) {
          flex-direction: column;
          align-items: stretch;
          input,
          textarea {
            max-width: 100%;
            margin-top: 10px;
          }
        }
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
`;
