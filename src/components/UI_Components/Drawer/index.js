import { Styles, ListStyles } from "./styles";
import { Header5, Span } from "../../UI_Components/FontSize/styles";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  DashboardIcon,
  DepositIcon,
  WithdrawalIcon,
  TransactionIcon,
  SettingsIcon,
  TransferIcon,
  BuyingIcon,
} from "../../assest/svg";
import { Flex } from "../Box/styles";
import { Link } from "react-router-dom";
import { generateID } from "../../../lib/generateID";

const Drawer = () => {
  const DrawerItem = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: <DashboardIcon width="16px" height="16px" />,
    },
    {
      name: "Deposit",
      href: "/dashboard/deposit",
      icon: <DepositIcon width="16px" height="16px" />,
    },
    {
      name: "Withdraw",
      href: "/dashboard/withdraw",
      icon: <WithdrawalIcon width="16px" height="16px" />,
    },
    {
      name: "Transfer",
      href: "/dashboard/transfer",
      icon: <TransferIcon width="16px" height="16px" />,
    },
    {
      name: "Transaction",
      href: "/dashboard/transactions",
      icon: <TransactionIcon width="16px" height="16px" />,
    },
    {
      name: "Buy airtime",
      href: "/dashboard/buyAirtime",
      icon: <BuyingIcon width="16px" height="16px" />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <SettingsIcon width="16px" height="16px" />,
    },
  ];

  let path = useLocation().pathname;

  return (
    <Styles className="App">
      <div className="drawer">
        <Header5 color="#673a1e">My Dashbaord</Header5>
        <ul>
          {DrawerItem.map(({ name, icon, href }) => (
            <ListStyles active={path === href} key={generateID(13)}>
              <Link to={href}>
                <Flex justify="flex-start">
                  <Span
                    lineHeight="15px"
                    color={path === href ? " #de8430" : "#b7b2b0"}
                  >
                    {icon}
                  </Span>
                  <Span
                    size="14px"
                    lineHeight="15px"
                    color={path === href ? " #de8430" : "#2c2d2d"}
                    className="drawerText"
                  >
                    {name}
                  </Span>
                </Flex>
              </Link>
            </ListStyles>
          ))}
        </ul>
      </div>
    </Styles>
  );
};

export default Drawer;
