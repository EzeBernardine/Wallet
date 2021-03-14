import { Styles } from "./styles";

import { AlertIcon } from "../../assest/svg";

const Alert = ({ type, children }) => {
  return (
    <Styles className="App" type={type}>
      <AlertIcon width="15px" height="15px" />
      {children}
    </Styles>
  );
};

export default Alert;
