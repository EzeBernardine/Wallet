import { Styles } from "./styles";
import { Flex } from "../../UI_Components/Box/styles";
import {
  Header5,
  Span,
  Header4,
  Bold,
} from "../../UI_Components/FontSize/styles";
import { Link } from "react-router-dom";
import { LogoutIcon } from "../../assest/svg";

const Header = () => {
  return (
    <Styles className="App">
      <Flex margin="0 0 0 0" justify="space-between" height="100%">
        <Link to="./">
          <Header4 color="#673a1e" bold>
            Wallet
          </Header4>
        </Link>

        <Flex height="100%" width="max-content" justify="flex-end">
          <Header5 color="#673a1e" className="welcomeNote">
            {" "}
            Welcome
          </Header5>
          <Flex
            height="100%"
            width="max-content"
            justify="flex-end"
            flexDir="column"
            align="flex-end"
          >
            <Span color="#2c2d2d">Anonymous Obinna</Span>
            <Bold size="14px" color="#de8430">
              #12000
            </Bold>
          </Flex>

          <Flex width="max-content" justify="flex-end" margin="15px 0 0 25px">
            <Link to="/">
              <LogoutIcon color="#5b5551" width="20px" height="20px" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Header;
