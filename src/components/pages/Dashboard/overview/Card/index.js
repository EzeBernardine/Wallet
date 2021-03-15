import { Styles } from "./styles";
import { Flex, Grid } from "../../../../UI_Components/Box/styles";
import {
  Header4,
  Span,
  Header3,
  Small,
  Header5,
} from "../../../../UI_Components/FontSize/styles";
import { WalletIcon } from "../../../../assest/svg";

const Card = () => {
  return (
    <Styles className="App">
      <Flex
        className="balance"
        margin="0 0 50px 0"
        align="flex-start"
        maxWidth="320px"
      >
        <Flex justify="flex-start">
          <Flex justify="flex-start" className="transaction-dates">
            <Flex flexDir="column" align="flex-start" width="50%">
              <Small color="#fdf1e9">Last login</Small>
              <Small color="#fdf1e9">Account Number</Small>
            </Flex>
            <Flex
              flexDir="column"
              align="flex-start"
              width="calc( 50% - 25px)"
              margin="0 0 0 15px"
            >
              <Small color="#fdf1e9"> 1-12-2021</Small>
              <Small color="#fdf1e9"> 000000000</Small>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDir="column" align="flex-start" margin="10px 0 0 0">
          <Flex justify="flex-start" className="wallet-icon">
            <WalletIcon color="#fff" width="20px" height="20px" />
            <Header5 color="#fff">Balance</Header5>
          </Flex>
          <Flex margin="10px 0 0 0" width=" max-content" className="amount">
            <Header3 color="#de8430"># 200000</Header3>
          </Flex>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Card;
