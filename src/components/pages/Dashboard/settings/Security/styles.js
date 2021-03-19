import styled from "styled-components";

export const Styles = styled.div`
  .input-container {
    max-width: 700px;
    > div {
      width: 100%;

      width: 100%;
      label {
        margin-bottom: 15px;
        margin-right: 15px;
        color: #5b5551;
      }
      input,
      textarea {
        max-width: 100%;
      }

      @media (max-width: 650px) {
        > :not(:first-child) {
          margin-top: 18px;
        }
        > div {
          min-width: 100%;
          > div {
            flex-direction: column;
          }
        }
      }
    }
  }

  .btn {
    button {
      background: #2bac20;
      :hover {
        background: #1e8216;
      }
      @media (max-width: 500px) {
        width: 100%;
      }
    }
  }
  .oldPassword button{
    background: #de8430
  }
`;
