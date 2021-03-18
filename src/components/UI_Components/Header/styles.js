import styled from "styled-components";

export const Styles = styled.header`
  height: 70px;
  padding: 0 5%;
  width: 100%;
  position: fixed;
  background: white;
  z-index: 100;
  right: 0;
  left: 0;
  top: 0;
  > div {
    span {
      margin-left: 15px;
    }
    .logout {
      display: flex;
      padding: 0;
      background: transparent;
    }
    .avatar {
      border-left: 1px solid #e1d9d4;
      padding-left: 10px;
      cursor: pointer;
      position: relative;
      .image {
        border-radius: 50%;
      }
      > .modal {
        position: absolute;
        top: 120%;
        width: 300px;
        max-width: 300px;
        right: -70px;
        cursor: auto;
        > .overlay {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background: #0600004f;
          z-index: 1000;
        }
        @media (max-width: 700px) {
          position: fixed;  
          top: 0;
          cursor: auto;
          bottom: 0;
          right: 0;
          left: 0;
          max-width: 100%;
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .welcomeNote {
      display: none;
    }
  }
`;
