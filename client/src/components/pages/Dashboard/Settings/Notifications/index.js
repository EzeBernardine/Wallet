import { Styles } from "./styles";
import { Flex } from "../../../../UI_Components/Box/styles";
import { Span } from "../../../../UI_Components/FontSize/styles";
import Switch from "../../../../UI_Components/Switch";

const Notifications = () => {
  return (
    <Styles className="App">
      <Flex margin="50px 0 " flexDir="column" align="flex-start">
        <Flex margin="10px 0 0" maxWidth="600px">
          <Span color="#5b5551">
            Get email notifications for all your transactons?
          </Span>
          <Flex width="max-content" margin="0 0 0 auto">
            <Switch
              initialState={true}
              color="#de8430"
              click={(checked) => console.log(checked)}
            />
          </Flex>
        </Flex>

        <Flex margin="10px 0 0 " maxWidth="600px">
          <Span color="#5b5551">
            Get sms notifications for all your transactons?
          </Span>
          <Flex width="max-content" margin="0 0 0 auto">
            <Switch
              initialState={true}
              color="#de8430"
              click={(checked) => console.log(checked)}
            />
          </Flex>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Notifications;
