/*
 * component: switch
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 * EmBED switch component
 */

import React, { useState, useEffect, createRef } from "react";
import { SwitchWrap } from "./switch.styles";

const Switch = ({ click, initialState, color }) => {
  const [switched, setSwitched] = useState(initialState || null);

  const handleSwitch = e => {
    setSwitched(e.target.checked);
    click(e.target.checked);
  };

  return (
    <SwitchWrap switched={switched} color={color}>
      <div className="switch-main">
        <div className="switch-btn">
          <span>
            <input
              type="checkbox"
              className="switch-check"
              onClick={handleSwitch}
              defaultChecked={switched}
            />
            <span className="switch-ball" />
          </span>
        </div>
        <div className="switch-overlay" />
      </div>
    </SwitchWrap>
  );
};

export default Switch;
