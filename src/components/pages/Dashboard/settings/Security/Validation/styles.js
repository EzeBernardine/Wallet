import styled from "styled-components";

export const Styles = styled.div`
  position: relative;
  width: 300px;
  border-bottom: 1px solid #fbe8dd;
  padding: 10px 20px;

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
      height: 10px;
      width: 10px;
      border-radius: 50%;
      transition: 300ms;
      border: ${({ matched }) =>
        "1px solid  " + (matched ? " #de8430" : "#918e8c")};
      background: ${({ matched }) => (matched ? " #de8430" : "transaprent")};
    }
  }
  :last-child {
    border: none;
  }
`;
