import styled from "styled-components";

export const Styles = styled.div`
  position: relative;
  width: 15em;
  padding: 5px 0;
  border-bottom: 1px solid #fbe8dd;

  > li {
    position: relative;
    > span {
        padding-left: 15px;
    }
    ::before {
      position: absolute;
      content: "";
      z-index: 1;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 7px;
      width: 7px;
      border-radius: 50%;
      transition: 300ms;
      background: ${({ matched }) => (matched ? " #de8430" : "#2c2d2d")};
    }
  }
`;
