import styled from "styled-components";

export const Styles = styled.div`
  form {
    width: 100%;
    max-width: 800px;
    .recipient {
      padding: 10px;
      .recipient-image {
        border-radius: 50%;
      }
      .recipient-more-details span {
        font-family: "Regular 400 italic";
      }
    }

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
          input,
          textarea {
            max-width: 450px;
          }

          @media (max-width: 950px) {
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
  }
`;
