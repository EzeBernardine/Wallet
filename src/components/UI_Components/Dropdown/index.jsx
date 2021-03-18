// import React, { useState } from "react";
// import { DropdownBox, DropdownModalBox } from "./Style";
// import { ArrowDownIcon, LessThanIcon, GreaterThanIcon } from "../../assest/svg";

// import { generateID } from "../../../lib/generateID";
// import { truncate } from "../../../lib/factory.lib";

// export const DropdownModal = ({
//   dropDownData,
//   dropBk,
//   dropHovBk,
//   dropCol,
//   click,
//   initial,
//   left,
//   right,
//   maxHeight,
//   canClick = true,
//   selectedSize,
//   selectedWeight,
//   selectedColor,
// }) => {
//   const [openModal, setOpenModal] = useState(false);
//   const [selected, setSelected] = useState(initial || "Select");

//   const handleSelectOption = (value) => {
//     setSelected(value);
//     setOpenModal(!openModal);
//     click(value);
//   };

//   return (
//     <DropdownModalBox
//       dropBk={dropBk}
//       dropHovBk={dropHovBk}
//       dropCol={dropCol}
//       left={left}
//       right={right}
//       maxHeight={maxHeight}
//       selectedSize={selectedSize}
//       selectedWeight={selectedWeight}
//       selectedColor={selectedColor}
//       canClick={canClick}
//       className="dropdownModalBox"
//     >
//       <div
//         className="click"
//         onClick={() => canClick && setOpenModal(!openModal)}
//       >
//         <span className="selectedText">
//           {truncate(selected, 20) || "Select"}
//         </span>
//         <ArrowDownIcon width="15px" height="15px" color=" #b2aabd" />
//       </div>

//       {openModal && (
//         <div
//           className="overlay"
//           onClick={() => canClick && setOpenModal(!openModal)}
//         />
//       )}

//       {openModal && (
//         <section>
//           <ul>
//             {dropDownData.map((item) => (
//               <li
//                 onClick={() => canClick && handleSelectOption(`${item.list}`)}
//                 key={generateID(15)}
//               >
//                 <span className="modalText">{item.list}</span>
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </DropdownModalBox>
//   );
// };

// export const DropdownShowMoreModal = ({
//   showMoreData,
//   dropBk,
//   dropHovBk,
//   dropCol,
//   listCol,
//   icon,
//   click,
//   right,
// }) => {
//   const [openModal, setOpenModal] = useState(false);

//   const handleCloseModal = (value) => {
//     setOpenModal(!openModal);
//     click(value);
//   };

//   return (
//     <DropdownModalBox
//       dropBk={dropBk}
//       dropHovBk={dropHovBk}
//       dropCol={dropCol}
//       listCol={listCol}
//       right={right}
//     >
//       <div className="click" onClick={() => setOpenModal(!openModal)}>
//         {icon ? (
//           icon
//         ) : (
//           <ArrowDownIcon width="15px" height="15px" color=" #b2aabd" />
//         )}
//       </div>

//       {openModal && (
//         <div className="overlay" onClick={() => setOpenModal(!openModal)} />
//       )}

//       {openModal && (
//         <section className="showMoreModal">
//           <ul>
//             {showMoreData.map((item) => (
//               <li
//                 onClick={() => handleCloseModal(`${item.list}`)}
//                 key={generateID(15)}
//               >
//                 {/* <span className='modalIcon'>I</span> */}
//                 <span className="modalText">{item.list}</span>
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </DropdownModalBox>
//   );
// };
