import { Styles } from "./styles";

import { AlertIcon, SuccessIcon } from "../../assest/svg";

const Alert = ({ type, children }) => {
  // const [status, setStatus] = useState(false);
  return (
    <Styles className="App" type={type}>
      {type === "success" ? (
        <SuccessIcon width="15px" height="15px" />
      ) : (
        <AlertIcon width="15px" height="15px" />
      )}
      {children}
    </Styles>
  );
};

export default Alert;
