import styled from "styled-components";

export const Styles = styled.div`
  form {
    .recipient {
      border: 1px solid #3ede305e;
      background: #56de301f;
      padding: 30px;
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
          }
          input {
            border: 1px solid #e1e1e1;
            flex: 1;
            padding: 10px 15px;
            border-radius: 8px;
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
  }
`;
