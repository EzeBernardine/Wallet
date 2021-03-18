import { Styles } from "./styles";
import { Flex, Frame, Grid } from "../../UI_Components/Box/styles";
import {
  Header5,
  Span,
  Header4,
  Header3,
} from "../../UI_Components/FontSize/styles";
import {
  LogoutIcon,
  CityIcon,
  LocationIcon,
  PhoneIcon,
} from "../../assest/svg";
import Avatar from "../../../components/assest/black.png";
import { useState } from "react";
import ProfileCard from "./ProfileCard";

const Header = () => {
  const [openProfile, setOpendProfile] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const handleOpenProfile = (bolean) => setOpendProfile(bolean);
  return (
    <Styles className="App">
      <Flex margin="0 0 0 0" justify="space-between" height="100%">
        <Header4 color="#673a1e" bold>
          Wallet
        </Header4>

        <Flex height="100%" width="max-content" justify="flex-end">
          <Flex width="max-content" className="welcomeNote">
            <Header5 color="#673a1e">Welcome</Header5>
            <Span color="#2c2d2d">Anonymous Obinna</Span>
          </Flex>

          <Flex width="max-content" margin="0 0 0 10px" className="avatar">
            <Frame
              height="40px"
              width="40px"
              className="image"
              onClick={() => handleOpenProfile(true)}
            >
              <img src={Avatar} alt="" />
            </Frame>

            {openProfile ? (
              <Flex className="modal">
                <div
                  className="overlay"
                  onClick={() => setOpendProfile(false)}
                ></div>

                <ProfileCard />
              </Flex>
            ) : null}
          </Flex>

          <Flex width="max-content" justify="flex-end" margin="0 0 0 25px">
            <button onClick={handleLogout} className="logout">
              <LogoutIcon color="#918e8c" width="20px" height="20px" />
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Header;
