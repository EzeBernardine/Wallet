import { Styles, ListStyles } from "./styles";
import { Header5, Span } from "../../UI_Components/FontSize/styles";
// import { Link } from "react-router-dom";
import {
  DashboardIcon,
  DepositeIcon,
  WithdrawalIcon,
  WalletIcon,
  SettingsIcon,
  TransferIcon,
} from "../../assest/svg";
import { Flex } from "../Box/styles";

const Drawer = ({ changeDrawerItem, drawerItem }) => {
  const DrawerItem = [
    {
      name: "Overview",
      icon: <DashboardIcon width="20px" height="20px" />,
    },
    {
      name: "Deposite",
      icon: <DepositeIcon width="20px" height="20px" />,
    },
    {
      name: "Withdraw",
      icon: <WithdrawalIcon width="20px" height="20px" />,
    },
    {
      name: "Transfer",
      icon: <TransferIcon width="20px" height="20px" />,
    },
    {
      name: "WalletIcon",
      icon: <WalletIcon width="20px" height="20px" />,
    },
    {
      name: "Settings",
      icon: <SettingsIcon width="20px" height="20px" />,
    },
  ];
  return (
    <Styles className="App">
      <div className="drawer">
        <Header5 color="#673a1e">My Dashbaord</Header5>
        <ul>
          {DrawerItem.map(({ name, icon }, index) => (
            <ListStyles active={drawerItem === index} key={name}>
              <button onClick={() => changeDrawerItem(index)}>
                <Flex justify="flex-start">
                  <Span
                    lineHeight="15px"
                    color={drawerItem === index ? " #de8430" : "#5b5551"}
                  >
                    {icon}
                  </Span>
                  <Span
                    lineHeight="15px"
                    color={drawerItem === index ? " #de8430" : "#5b5551"}
                    className="drawerText"
                  >
                    {name}
                  </Span>
                </Flex>
              </button>
            </ListStyles>
          ))}
        </ul>
      </div>
    </Styles>
  );
};

export default Drawer;
