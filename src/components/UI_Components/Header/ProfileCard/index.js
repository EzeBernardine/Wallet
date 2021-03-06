import { Styles } from "./styles";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import { Header5, Span } from "../../../UI_Components/FontSize/styles";
import { CityIcon, LocationIcon, PhoneIcon } from "../../../assest/svg";
import { Link } from "react-router-dom";
import Avatar from "../../../../components/assest/black.png";

const ProfileCard = ({ setOpendProfile, userProfile }) => {
  return (
    <Styles className="App">
      <Flex className="profile-card">
        <Flex className="image-section">
          <Frame height="120px" width="120px" className="image">
            <img src={Avatar} alt="" />
          </Frame>
        </Flex>

        <Flex margin="0" flexDir="column" className="name-section">
          {userProfile?.name?.length > 0 ? (
            <Header5 color="#673a1e" bold>
              {userProfile.name}
            </Header5>
          ) : null}
          {userProfile?.username?.length > 0 ? (
            <Header5 color="#dda278"> {userProfile.username}</Header5>
          ) : null}
        </Flex>

        <Flex flexDir="column" className="location-details">
          <Grid flexDir="column" gap="0">
            {userProfile.city?.length > 0 ? (
              <Flex
                justify="flex-start"
                margin="5px 0"
                align="baseline"
                flexWrap="nowrap"
              >
                <Flex width="1px" minWidth="15px">
                  <CityIcon width="15px" height="15px" color="#673a1e" />
                </Flex>
                <Span color="#673a1e" align="start">
                  {userProfile.city}
                </Span>
              </Flex>
            ) : null}

            {userProfile.phone?.length > 0 ? (
              <Flex
                justify="flex-start"
                margin="5px 0"
                align="baseline"
                flexWrap="nowrap"
              >
                <Flex width="1px" minWidth="15px">
                  <PhoneIcon width="15px" height="15px" color="#673a1e" />
                </Flex>
                <Span color="#673a1e" align="start">
                  {userProfile.phone}
                </Span>
              </Flex>
            ) : null}

            {userProfile.Address?.length > 0 ? (
              <Flex
                justify="flex-start"
                margin="5px 0"
                align="baseline"
                flexWrap="nowrap"
              >
                <Flex width="16px" minWidth="16px">
                  <LocationIcon width="16px" height="16px" color="#673a1e" />
                </Flex>
                <Span color="#673a1e" align="start">
                  {userProfile.Address}
                </Span>
              </Flex>
            ) : null}
          </Grid>
        </Flex>

        <Flex className="btns">
          <Flex>
            <Link to="/dashboard/settings">
              <button onClick={() => setOpendProfile(false)}>
                Edit Profile
              </button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default ProfileCard;
