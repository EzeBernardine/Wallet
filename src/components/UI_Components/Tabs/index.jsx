/*
 * component: Custom Component
 * author: Chidera Paul Ugwuanyi
 * Date: June 23, 2020
 * Custom tab
 */

import React, { useState } from "react";
import propTypes from "prop-types";
import { TabWrapper } from "./styles";
import Tab from "./Tab";

const Tabs = ({ icon, click, children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    click(tab);
    setActiveTab(tab);
  };
  console.log(icon)
  return (
    <TabWrapper>
      <ol className="tab-list">
        {children.map((child, index) => {
          const { label } = child.props;
          return (
            <>
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              icon={icon}
              onClick={onClickTabItem}
            />
            </>
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </TabWrapper>
  );
};

Tabs.propTypes = {
  children: propTypes.instanceOf(Array).isRequired,
};
export default Tabs;