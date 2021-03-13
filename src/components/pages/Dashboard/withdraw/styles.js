import styled from "styled-components";

export const Styles = styled.div`
  > aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    bottom: 0;
    padding: 20px;
    > h3 {
      margin: 50px 0 20px;
    }
    ul {
      li {
        color: #5b5551;
        margin: 5px 0 5px 10px;
        padding: 10px;
        cursor: pointer;
        :hover {
          color: #353332;
        }
        :last-child {
          padding: 0;
          a {
            width: 100%;
            display: inline-block;
            padding: 10px;
            color: #4b5563;
            :hover {
              color: #353332;
            }
          }
        }
      }
    }
  }
  > div {
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
  }
`;
