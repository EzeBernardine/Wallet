import React, { useState } from "react";
import { CustomTableMain, Td, Paginator } from "./styles";
import { generateID } from "../../../lib/generateID";
import PropTypes from "prop-types";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import Pagination from "../Paginator";

const CustomTable = ({
  tableBody,
  tableHead,
  theadColor,
  theadBkColor,
  rowClick,
  tbodyColor,
  rowHovColor,
  bottomGap,
  paginator,
  pageSize,
  firstLast,
  prevNext,
}) => {
  const [pageOfItems, setPageOfItems] = useState([]);

  const [tableData] = useState(tableBody);

  const onChangePage = (items) => {
    setPageOfItems(items);
  };

  const returnTableRow = (data) => {
    let __data = { ...data };
    delete __data._id;

    return (
      <tr key={generateID(17)} onClick={() => rowClick(data)}>
        {Object.values(__data).map((item, i) => (
          <Td
            theadColor={theadColor}
            tbodyColor={tbodyColor}
            head={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
            className={
              (Object.keys(data)[i] &&
                Object.keys(data)[i].replace(/'/g, "")) ||
              ""
            }
            id={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
            key={generateID(14)}
          >
            {item}
          </Td>
        ))}
      </tr>
    );
  };
  return (
    <>
      {tableBody.length !== 0 ? (
        <CustomTableMain
          theadColor={theadColor}
          theadBkColor={theadBkColor}
          bottomGap={bottomGap}
          tbodyColor={tbodyColor}
          rowHovColor={rowHovColor}
          paginator={paginator}
        >
          <OverFlowScrollBar className="container">
            <table>
              <thead>
                <tr>
                  {tableHead.map((head, i) => (
                    <th key={generateID(11)}>{head.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {paginator
                  ? pageOfItems.map((data, idx) => returnTableRow(data))
                  : tableBody.map((data, idx) => returnTableRow(data))}
              </tbody>
            </table>
          </OverFlowScrollBar>

          <Paginator className="paginator" paginator={paginator}>
            <Pagination
              items={tableData}
              pageSize={pageSize || 5}
              prevNext={prevNext || null}
              onChangePage={onChangePage}
              firstLast={firstLast || null}
            />
          </Paginator>
        </CustomTableMain>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

CustomTable.propTypes = {
  // tableBody: PropTypes.array.isRequired,
  tableHead: PropTypes.array.isRequired,
  theadColor: PropTypes.string,
  theadBkColor: PropTypes.string,
  rowClick: PropTypes.func,
  tbodyColor: PropTypes.string,
  rowHovColor: PropTypes.string,
  bottomGap: PropTypes.string,
  pageSize: PropTypes.number,
  firstLast: PropTypes.any,
  paginator: PropTypes.any,
  prevNext: PropTypes.any,
};

export default CustomTable;
