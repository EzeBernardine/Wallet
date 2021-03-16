import { Styles } from "./styles";
import { Flex, Frame } from "../../../../UI_Components/Box/styles";
import {
  Header3,
  Small,
  Bold,
  Header4,
} from "../../../../UI_Components/FontSize/styles";
import Image from "../../../../assest/Icon awesome-sim-card.png";
import Image2 from "../../../../assest/Group 810.png";

const Card = () => {
  return (
    <Styles className="App">
      <Flex className="balance" align="flex-start" maxWidth="400px">
        <Flex justify="space-between">
          <Flex width="max-content">
            <Bold color="#5b5551">Wallet: </Bold>
            <Flex width="max-content" margin="0 0 0 10px">
              <Small color="#867d76"> Virtal Card</Small>
            </Flex>
          </Flex>
          {/* m */}
        </Flex>

        <Flex margin="10px 0 0 0" justify="flex-start" className='amount'>
          <Frame width="40px" height="30px">
            <img src={Image} alt="icon" />
          </Frame>
          <Flex margin="0px 0 0 10px" width=" max-content" className="amount">
            <Header4 color="#673a1e" bold> &#8358; 200000</Header4>
          </Flex>
        </Flex>

        <Flex margin="5px 0 0 0" justify="space-between">
          <Header4  size='23px' color="#5b5551"> 0000 </Header4>
          <Header4  size='23px' color="#5b5551"> 0000 </Header4>
          <Header4  size='23px' color="#5b5551"> 0000 </Header4>
          <Header4  size='23px' color="#5b5551"> 0000 </Header4>
        </Flex>

        <Flex margin="10px 0 0 0" justify="flex-start">
          <Flex margin="0px 0 0 0" width=" max-content" className="amount">
            <Small color="#5b5551"> 12/12</Small>
          </Flex>
          <Flex margin="0px 0 0 50px" width=" max-content" className="amount">
            <Small color="#5b5551"> 16/14</Small>
          </Flex>
        </Flex>

        <Flex margin="10px 0 0 0" justify="space-between">
          <Flex margin="0px 0 0 0" width=" max-content" className="amount">
            <Bold color="#673a1e">Anonymous</Bold>
          </Flex>
          <Frame width="80px" height="40px" object="contain">
            <img src={Image2} alt="icon" />
          </Frame>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Card;
