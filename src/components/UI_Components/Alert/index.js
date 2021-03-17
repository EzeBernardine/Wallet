import { Styles } from "./styles";
import { AlertIcon, SuccessIcon } from "../../assest/svg";
import { useEffect, useState } from "react";

const Alert = ({ type, duration = 3000, reCall, children }) => {
  const [visible, setVisible] = useState(true);

  const TimeOut = () =>
    setTimeout(() => {
      setVisible(false);
    }, duration);

  useEffect(() => {
    TimeOut();

    return () => clearTimeout(TimeOut());
  }, [visible, TimeOut]);
  return (
    <>
      {visible ? (
        <>
          <Styles className="App" type={type}>
            {type === "success" ? (
              <SuccessIcon width="15px" height="15px" />
            ) : (
              <AlertIcon width="15px" height="15px" />
            )}
            {children}
          </Styles>
        </>
      ) : null}
    </>
  );
};

export default Alert;
