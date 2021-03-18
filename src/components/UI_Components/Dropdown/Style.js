// import styled from "styled-components";

// export const DropdownModalBox = styled("div")`
//   position: relative;
//   width: max-content;
//   min-width: max-content;
//   & > .click {
//     background: ${({ dropBk }) => dropBk || "#eff0f5"};
//     cursor: ${({ canClick }) =>
//       canClick === undefined
//         ? "pointer"
//         : canClick
//         ? "pointer"
//         : "not-allowed"};
//     padding: ${({ dropBk }) =>
//       !!dropBk
//         ? dropBk === "transparent"
//           ? "5px 5px"
//           : " 5px 13px"
//         : "5px 13px"};
//     border-radius: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #777;
//     transition: 250ms ease-in-out;
//     border: 1px solid #e3e5ea;
//     span {
//       color: ${({ selectedColor, canClick }) =>
//         !canClick ? "#d0cece" : selectedColor ? selectedColor : " #777"};
//       /* color: ${({ selectedColor }) => selectedColor || " #777"}; */
//       font-size: ${({ selectedSize }) => selectedSize || " 13px"};
//       font-weight: ${({ selectedWeight }) => selectedWeight || "auto"};
//       opacity: 0.8;
//       padding-right: 10px;
//     }
//     svg {
//       font-size: ${({ selectedSize }) => selectedSize || " 13px"};
//     }
//     &:hover {
//       border: 1px solid #dbdbdb;
//       box-shadow: ${({ canClick }) => canClick && "1px 3px 9px -6px #0003"};
//       background: ${({ dropHovBk, canClick }) =>
//         !canClick ? "#dcdde1" : dropHovBk || "#e3e3e3"};
//       color: ${({ dropCol }) => dropCol && dropCol};
//       & > span {
//         opacity: 1;
//       }
//     }
//   }
//   & > .overlay {
//     position: fixed;
//     top: 0;
//     right: 0;
//     left: 0;
//     bottom: 0;
//     z-index: 10008;
//     cursor: auto;
//   }
//   & > section {
//     position: absolute;
//     z-index: 10009;
//     top: 100%;
//     border: 0;
//     right: ${({ right }) => (right ? 0 : "auto")};
//     left: ${({ left }) => (left ? 0 : "auto")};
//     margin: 2px auto 0;
//     padding: 5px 0;
//     font-size: 14px;
//     min-width: 160px;
//     max-width: 250px;
//     width: max-content;
//     box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
//     border-radius: 3px;
//     background-clip: padding-box;
//     background-color: #fff;
//     max-height: ${({ maxHeight }) => maxHeight || "200px"};
//     overflow-y: auto;
//     overflow-x: hidden;
//     scrollbar-color: #e3e3e3 transparent;
//     scrollbar-width: thin;

//     &::-webkit-scrollbar {
//       width: 5px;
//       height: 11px;
//     }
//     &::-webkit-scrollbar-button {
//       width: 0px;
//       height: 0px;
//     }
//     &::-webkit-scrollbar-thumb {
//       border-radius: 50px;
//       background: #e3e3e3;
//     }
//     &::-webkit-scrollbar-thumb:active {
//       background: #ff6600;
//     }
//     &::-webkit-scrollbar-track {
//       background: transparent;
//       border-radius: 53px;
//     }
//     &::-webkit-scrollbar-track:hover {
//       background: #eff0f5;
//     }
//     &::-webkit-scrollbar-track:active {
//       background: #e3e3e3;
//     }
//     &::-webkit-scrollbar-corner {
//       background: transparent;
//     }

//     /* &:hover {
//       overflow-y: scroll;
//     } */
//     ul {
//       padding: 0;
//       margin: 0;
//       li {
//         list-style: none;
//         cursor: pointer;
//         font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//         font-weight: 400;
//         text-align: left;
//         height: 100%;
//         margin: 0 5px;
//         display: block;
//         position: relative;
//         font-size: 13px;
//         min-height: unset;
//         display: flex;
//         padding: 10px 20px;
//         /* padding: 10px; */
//         span {
//           color: ${({ listCol }) => listCol || "#333"};
//           font-size: 13px;
//         }
//         &:hover {
//           box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28),
//             0 4px 20px 0px rgba(0, 0, 0, 0.12),
//             0 7px 8px -5px rgba(156, 39, 176, 0.2);
//           background-color: #ff6600;
//           span {
//             color: #fff !important;
//           }
//         }
//         .modalText {
//           height: 100%;
//           flex: 1;
//         }
//         .modalIcon {
//           width: 20px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//       }
//     }
//   }
// `;
