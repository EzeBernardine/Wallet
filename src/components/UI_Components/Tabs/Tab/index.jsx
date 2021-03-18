import React from "react";
import propTypes from "prop-types";

const Tab = ({ activeTab, label, onClick }) => {
  const onClickTab = () => onClick(label);
  let className = "tab-list-item";
  if (activeTab === label) {
    className += " tab-list-active";
  }

  return (
    <>
      <li className={className} onClick={onClickTab}>
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
