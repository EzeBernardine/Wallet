import styled from "styled-components";

export const Styles = styled.div`
  .input-wrap {
    .upload {
      border: 2px dashed #e1d9d4;
      width: 300px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      > input {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        padding: 0;
        opacity: 0;
        z-index: 10;
      }
      > div {
        text-align: center;
        padding: 0 20px;
      }
    }
    > div > .error {
      font-size: 14px;
      color: #de5930;
      margin: 10px auto 0 0;
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
`;
