import { Styles } from "./styles";
import { Flex } from "../../../../UI_Components/Box/styles";
import { Header5 } from "../../../../UI_Components/FontSize/styles";
import { NotificationIcon } from "../../../../assest/svg";
import Switch from "../../../../UI_Components/Switch";

const Notifications = () => {
  return (
    <Styles className="App">
      <Flex margin="50px 0">
        <Flex margin="0 10px 0 0" width="max-content">
          <NotificationIcon height="40px" width="20px" color="#5b5551" />
        </Flex>
        <Header5 color="#5b5551">
          Get email notifications for all your transactons?
        </Header5>
        <Flex width="max-content" margin="0 0 0 20px">
          <Switch
            initialState={true}
            color="#de8430"
            click={(checked) => console.log(checked)}
          />
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Notifications;
