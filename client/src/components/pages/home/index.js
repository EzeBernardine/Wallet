import { Styles } from "./styles";
import { Flex, Frame } from "../../UI_Components/Box/styles";
import { Header1, Paragraph } from "../../UI_Components/FontSize/styles";
import Image from "../../assest/wallet1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Styles className="App">
      <Flex margin="50px 0">
        <Flex width="40%" className="title" justify="flex-start">
          <Header1 size="5rem" color="#673a1e" lineHeight="6rem">
            Wallet <br />
            System
          </Header1>

          <Paragraph color="#2b180d" lineHeight="32px" spacing="1.02px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque
            illo alias ratione deleniti atque iste tempora? Molestiae, non
          </Paragraph>

          <Flex className="btn" justify="flex-start" margin="20px 0 0 0">
            <Link to="/registration">
              <button>Start Saving</button>
            </Link>
          </Flex>
        </Flex>

        <Flex width="60%">
          <Frame width="70%" height="auto">
            <img src={Image} alt="wallet" />
          </Frame>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Home;
