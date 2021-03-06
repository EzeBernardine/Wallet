import { Styles } from "./styles";
import { Flex } from "../../../UI_Components/Box/styles";
import { Header5 } from "../../../UI_Components/FontSize/styles";
import Layout from "../../../UI_Components/Layout";
import Tabs from "../../../UI_Components/Tabs";
import { useState } from "react";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Security from "./Security";
import AccountVerification from "./AccountVerification";

const Settings = () => {
  const [, setTabType] = useState("Profile Update");

  return (
    <Layout>
      <Styles className="App">
        <Flex margin="0 0 10px 0" justify="flex-start">
          <Header5 color="#de8430" spacing=".4rem" bold>
            Settings
          </Header5>
        </Flex>

        <Tabs click={(tab) => setTabType(tab)}>
          <div label="Profile">
            <Profile />
          </div>
          <div label="Security">
            <Security />
          </div>
          <div label="Account Verification">
            <AccountVerification />
          </div>
          <div label="Notification">
            <Notifications />
          </div>
        </Tabs>
      </Styles>
    </Layout>
  );
};

export default Settings;
