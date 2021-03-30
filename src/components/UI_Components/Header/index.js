import { Styles } from "./styles";
import { Flex, Frame } from "../../UI_Components/Box/styles";
import { Header5, Span, Header4 } from "../../UI_Components/FontSize/styles";
import { LogoutIcon } from "../../assest/svg";
import Avatar from "../../../components/assest/black.png";
import ProfileCard from "./ProfileCard";
import { useHistory } from "react-router-dom";
import API from "../../../lib/api";
import useLocalStorageHook from "../../../lib/customHook";
import { useState, useEffect } from "react";

const Header = () => {
  const [openProfile, setOpendProfile] = useState(false);
  let history = useHistory();
  const { state: token } = useLocalStorageHook("token");
  const [userProfile, setUserprofile] = useState({
    Address: "",
    city: "",
    name: "",
    phone: "",
    username: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

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
  });
  return (
    <Styles className="App">
      <Flex margin="0 0 0 0" justify="space-between" height="100%">
        <Header4 color="#673a1e" bold>
          Wallet
        </Header4>

        <Flex height="100%" width="max-content" justify="flex-end">
          {userProfile.username?.length > 0 ? (
            <Flex width="max-content" className="welcomeNote">
              <Header5 color="#673a1e">Welcome</Header5>
              <Span color="#2c2d2d">{userProfile.username}</Span>
            </Flex>
          ) : null}

          <Flex width="max-content" margin="0 0 0 10px" className="avatar">
            <Frame
              height="40px"
              width="40px"
              className="image"
              onClick={() => setOpendProfile(true)}
            >
              <img src={Avatar} alt={userProfile.username} />
            </Frame>

            {openProfile ? (
              <Flex className="modal">
                <div
                  className="overlay"
                  onClick={() => setOpendProfile(false)}
                ></div>

                <ProfileCard
                  setOpendProfile={setOpendProfile}
                  userProfile={userProfile}
                />
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
