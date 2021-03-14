import styled from "styled-components";

export const Styles = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  bottom: 0;
  padding: 20px 0 0 5%;
  > .drawer {
    margin-top: 100px;
    > h5 {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 700px) {
    position: unset;
    width: 100%;
    padding: 20px 5%;
    margin: 70px 0 0;
    .drawer {
      margin: 0;
      h5 {
        display: none;
      }
      ul {
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        overflow-x: auto;
      }
    }
  }
`;

export const ListStyles = styled.li`
  margin: 5px 0;
  cursor: pointer;
  button {
    padding: 13px 0;
    font-weight: normal;
    color: #5b5551;
    width: 100%;
    text-align: start;
    background-color: transparent;
    > div span {
      margin-right: 15px;
      :hover {
        color: ${({ active }) => (active ? "#de8430" : "#353332")};
      }
    }
  }

  @media (max-width: 700px) {
    padding: 0 10px;
    border-bottom: ${({ active }) => active && "2px solid #de8430"};
    > button {
      padding: 6px 6px !important;
      white-space: nowrap;
      span {
        margin: 0 !important;
      }
    }
    .drawerText {
      display: none;
    }
  }
`;
