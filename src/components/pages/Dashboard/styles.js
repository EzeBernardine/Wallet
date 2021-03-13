import styled from "styled-components";

export const Styles = styled.div`
  > aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    bottom: 0;
    padding: 20px 40px;
    > .drawer {
      /* margin-left: 20px; */
      > h5 {
        margin: 50px 0 20px;
      }
      ul {
        li {
          margin: 5px 0;
          cursor: pointer;
          button {
            padding: 10px 0;
            font-weight: normal;
            color: #5b5551;
            width: 100%;
            text-align: start;
            background-color: transparent;
            :hover {
              color: #353332;
            }
          }
          :last-child {
            padding: 0;
            a {
              width: 100%;
              display: inline-block;
              padding: 10px 0;   font-weight: normal;
              color: #5b5551;
              :hover {
                color: #353332;
              }
            }
          }
        }
      }
    }
  }
  > div {
    min-height: 100vh;
    width: calc(100% - 240px);
    margin: 0 0 0 auto;
    > header {
      height: 70px;
      padding: 0 5%;
      width: 100%;
      > div {
        span {
          margin-left: 15px;
        }
      }
    }
    > section {
      padding: 50px;
    }
  }
`;
