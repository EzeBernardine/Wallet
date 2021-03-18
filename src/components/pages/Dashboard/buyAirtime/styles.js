import styled from "styled-components";

export const Styles = styled.div`
  form {
    max-width: 800px;
    .input-container {
      max-width: 700px;
      margin-top: 50px;

      .input-wrap {
        label {
          margin-bottom: 15px;
        }
      }
      .network {
        .frame {
          position: absolute;
          top: 0;
          bottom: 20px;
          margin: auto;
          left: 10px;
        }
        select {
          padding: 15px 30px;
          cursor: pointer;
        grid-template-columns: 1fr;
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
