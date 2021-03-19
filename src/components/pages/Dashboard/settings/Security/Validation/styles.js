import styled from "styled-components";

export const Styles = styled.div`
  position: relative;
  width: 15em;
  padding: 5px 0;
  border-bottom: 1px solid #e1d9d4;

  > li {
    position: relative;
    > span {
        padding-left: 10px;
    }
    ::before {
      position: absolute;
      content: "";
      z-index: 1;
      top: 0.5em;
      height: 5px;
      width: 5px;
      transition: 0.5s;
      background: ${({ matched }) => (matched ? " #de8430" : "#2c2d2d")};
    }
  }
`;
