import styled from "styled-components";

export const InputStyles = styled.div`
  position: relative;
  padding-bottom: 20px;
  display: flex;
  flex: 1;
  > svg {
    position: absolute;
    right: 10px;
    top: 0;
    z-index: -1;
    bottom: 20px;
    margin: auto;
  }
  > input {
    flex: 1;
  }
  > div {
    position: absolute;
    top: 82%;
    font-size: 14px;
    color: #de5930;
    margin: 0 auto 0 0;
  }
`;
