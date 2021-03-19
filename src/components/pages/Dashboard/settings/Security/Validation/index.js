import { Styles } from "./styles";
import { generateID } from "../../../../../../lib/generateID";
import { Span } from "../../../../../UI_Components/FontSize/styles";

const Validation = ({ data }) => {
    // console.log(data)
  return (
    <Styles key={generateID(15)} matched={data[1] ? true : false}>
      <li className="must-text">
        <Span size="14px" lineHeight="15px" color={"#2c2d2d"}>
          {data[0]}
        </Span>
      </li>
    </Styles>
  );
};

export default Validation;

