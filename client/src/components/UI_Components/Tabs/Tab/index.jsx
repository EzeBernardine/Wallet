import React from "react";
import propTypes from "prop-types";

const Tab = ({ icon, activeTab, label, onClick }) => {
  const onClickTab = () => onClick(label);
  let className = "tab-list-item";
  if (activeTab === label) {
    className += " tab-list-active";
  }
  // console.log(icon, label);
  return (
    <>
      <li className={className} onClick={onClickTab}>
        {icon}
        {label}
      </li>
    </>
  );
};

Tab.propTypes = {
  activeTab: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
export default Tab;
