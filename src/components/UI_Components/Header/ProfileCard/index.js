import { Styles } from "./styles";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import { Header5, Span } from "../../../UI_Components/FontSize/styles";
import { CityIcon, LocationIcon, PhoneIcon } from "../../../assest/svg";
import { Link } from "react-router-dom";
import Avatar from "../../../../components/assest/black.png";
import API from "../../../../lib/api";
import useLocalStorageHook from "../../../../lib/customHook";
import { useState, useEffect } from "react";

const ProfileCard = ({ handleOpenProfile }) => {
  const { state: token } = useLocalStorageHook("token");
  const [userProfile, setUserprofile] = useState({
    Address: "",
    city: "",
    name: "",
    phone: "",
    username: "",
  });

  const getCurrentUserProfile = async () => {
    await API.get("user/myprofile", {
      headers: { Authorization: `${token.replace(/['"]+/g, "")}` },
    })
      .then(({ data }) => {
        setUserprofile({
          Address: data.data.Address,
          city: data.data.city,
          name: data.data.name,
          phone: data.data.phone,
          username: data.data.username,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCurrentUserProfile();
  }, []);

  return (
    <Styles className="App">
      <Flex className="profile-card">
        <Flex className="image-section">
          <Frame height="120px" width="120px" className="image">
            <img src={Avatar} alt="" />
          </Frame>
        </Flex>

        <Flex margin="0" flexDir="column" className="name-section">
          {userProfile.name?.length > 0 ? (
            <Header5 color="#673a1e" bold>
              {userProfile.name}
            </Header5>
          ) : null}
          {userProfile.username?.length > 0 ? (
            <Header5 color="#dda278"> {userProfile.username}</Header5>
          ) : null}
        </Flex>

        <Flex flexDir="column" className="location-details">
          <Grid flexDir="column" gap="0">
            {userProfile.city?.length > 0 ? (
              <Flex justify="flex-start" margin="5px 0">
                <Flex width="max-content">
                  <CityIcon width="15px" height="15px" color="#673a1e" />
                </Flex>
                <Span color="#673a1e"> {userProfile.city}</Span>
              </Flex>
            ) : null}

            {userProfile.phone?.length > 0 ? (
              <Flex justify="flex-start" margin="5px 0">
                <Flex width="max-content">
                  <PhoneIcon width="15px" height="15px" color="#673a1e" />
                </Flex>
                <Span color="#673a1e"> {userProfile.phone}</Span>
              </Flex>
            ) : null}

            {userProfile.Address?.length > 0 ? (
              <Flex justify="flex-start" margin="5px 0">
                <Flex width="max-content">
                  <LocationIcon width="16px" height="16px" color="#673a1e" />
                </Flex>
                <Span color="#673a1e"> {userProfile.Address}</Span>
              </Flex>
            ) : null}
          </Grid>
        </Flex>

        <Flex className="btns">
          <Flex>
            <Link to="/dashboard/settings">
              <button onClick={() => handleOpenProfile(false)}>
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
