import { Styles } from "./styles";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import {
  Header5,
  Span,
  Header4,
  Header3,
} from "../../../UI_Components/FontSize/styles";
import {
  LogoutIcon,
  CityIcon,
  LocationIcon,
  PhoneIcon,
} from "../../../assest/svg";
import Avatar from "../../../../components/assest/black.png";

const ProfileCard = () => {
  return (
    <Styles className="App">
      <Flex className="profile-card">
        <Flex className="image-section">
          <Frame height="120px" width="120px" className="image">
            <img src={Avatar} alt="" />
          </Frame>
        </Flex>

        <Flex margin="0" flexDir="column" className="name-section">
          <Header5 color="#673a1e" bold>
            Anonymous Obinna
          </Header5>
          <Header5 color="#dda278">Username</Header5>
        </Flex>

        <Flex flexDir="column" className="location-details">
          <Grid flexDir="column">
            <Flex justify="flex-start" margin="5px 0">
              <Flex width="max-content">
                <CityIcon width="15px" height="15px" color="#673a1e" />
              </Flex>
              <Span color="#673a1e"> CityCity City City </Span>
            </Flex>

            <Flex justify="flex-start" margin="5px 0">
              <Flex width="max-content">
                <PhoneIcon width="15px" height="15px" color="#673a1e" />
              </Flex>
              <Span color="#673a1e"> Phone</Span>
            </Flex>

            <Flex justify="flex-start" margin="5px 0">
              <Flex width="max-content">
                <LocationIcon width="16px" height="16px" color="#673a1e" />
              </Flex>
              <Span color="#673a1e"> Address</Span>
            </Flex>
          </Grid>
        </Flex>

        <Flex className="btns">
          <Flex width="50%">
            <button>Edit Profile</button>
          </Flex>
          <Flex width="50%">
            <button>Buy airtime</button>
          </Flex>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default ProfileCard;
