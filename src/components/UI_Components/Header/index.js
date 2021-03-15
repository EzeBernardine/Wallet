import { Styles } from "./styles";
import { Flex } from "../../UI_Components/Box/styles";
import { Header5, Span, Header4 } from "../../UI_Components/FontSize/styles";
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
          <Flex width="max-content">
            <Header5 color="#673a1e" className="welcomeNote">
              Welcome
            </Header5>
            <Span color="#2c2d2d">Anonymous Obinna</Span>
          </Flex>

          <Flex width="max-content" justify="flex-end" margin="0 0 0 25px">
            <Link to="/">
              <LogoutIcon color="#918e8c" width="20px" height="20px" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Header;
