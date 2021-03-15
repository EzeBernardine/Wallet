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
  }
`;
