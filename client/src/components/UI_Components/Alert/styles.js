import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  position: relative;
  padding: 10px 30px;
  border-radius: 4px;
  border: ${({ type }) =>
    type === "success" ? "1px solid #2bac205e" : "1px solid #de84305e"};
  background: ${({ type }) => (type === "success" ? "#56de301f" : "#de84301f")};
  * {
    color: ${({ type }) => (type === "success" ? "#2bac20" : "#de8430")};
  }
  > svg {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;
