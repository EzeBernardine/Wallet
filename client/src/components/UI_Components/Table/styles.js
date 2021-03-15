import styled from "styled-components";

export const CustomTableMain = styled.section`
  .container {
    /* overflow-x: visible; */
    /* overflow-y: scroll; */

    overflow-y: visible;
    overflow-x: scroll;
  }
  background: white;
  padding-bottom: ${({ paginator }) => !paginator && "20px"};
  table {
    background: white;
    border-collapse: collapse;
    text-align: start;
    width: 100%;
    thead {
      background: ${({ theadBkColor }) => theadBkColor || "#fff"};
      tr {
        th {
          text-align: start;
          color: ${({ theadColor }) => theadColor || "#033"};
          font-size: 16px;
          padding: 0.8em 0 0.8rem 1.8rem;
          min-width: 160px;
          @media (max-width: 1200px) {
            min-width: auto;
          }
        }
      }
    }
    tbody {
      tr {
        background: white;
        cursor: pointer;
        border: none;
        border-bottom: ${({ bottomGap }) =>
          bottomGap ? `${bottomGap} solid   #fff` : "5px solid  #fff "};
        &:hover {
          box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.27);
          background: ${({ rowHovColor }) =>
            rowHovColor || "#fff7ee !important"};
        }

        .readAll {
          color: #17a2b8;
          cursor: pointer;
          font-size: 0.75rem;
        }

        .empty {
          width: max-content;
          .showMoreModal {
            bottom: -2px;
            top: unset;
          }
          @media (min-width: 1200px) {
            padding: 0;
          }
        }

        &:nth-child(2n) {
          background: #d2ccc626;
        }
      }
    }
    @media (max-width: 900px) {
      thead {
        display: none;
      }
      tbody {
        tr {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

export const Td = styled.td`
  padding: 1.2rem 1.8rem;
  font-weight: 400;
  font-size: 14px;
  span {
    font-size: 0.8rem;
    color: ${({ tbodyColor }) => tbodyColor || "#767675"};
  }

  color: ${({ tbodyColor }) => tbodyColor || "#767675"};
  @media (max-width: 1200px) {
    min-width: auto;
  }
  @media (max-width: 900px) {
    padding: 0.8rem 1.8rem;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    align-items: flex-start;
    text-align: end;
    &:before {
      margin-right: 21px;
      text-align: start;
      color: ${({ theadColor }) => theadColor || "#033"};
      font-size: 0.8rem;
      font-weight: bold;
    }
    &:before {
      content: ${({ head }) => `'${head}'`};
      font-size: 0.7rem;
    }
  }
  @media (max-width: 600px) {
    font-size: 0.65rem;
    font-size: 14px;
    &:before {
      font-size: 14px;
    }
  }
`;

export const Paginator = styled('div')`
  background: white;
  padding: 1em 5px;
  display: ${({ paginator }) => (paginator ? "block" : "none")};
  ul {
    justify-content: flex-end;
  }
`;
