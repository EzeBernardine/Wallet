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
} from "../../assest/svg";
import { Flex } from "../Box/styles";
import { Link } from "react-router-dom";

const Drawer = () => {
  const DrawerItem = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: <DashboardIcon width="20px" height="20px" />,
    },
    {
      name: "Deposit",
      href: "/dashboard/deposit",
      icon: <DepositIcon width="20px" height="20px" />,
    },
    {
      name: "Withdraw",
      href: "/dashboard/withdraw",
      icon: <WithdrawalIcon width="20px" height="20px" />,
    },
    {
      name: "Transfer",
      href: "/dashboard/transfer",
      icon: <TransferIcon width="20px" height="20px" />,
    },
    {
      name: "Transaction",
      href: "/dashboard/transactions",
      icon: <TransactionIcon width="20px" height="20px" />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <SettingsIcon width="20px" height="20px" />,
    },
  ];

  let path = useLocation().pathname;

  return (
    <Styles className="App">
      <div className="drawer">
        <Header5 color="#673a1e">My Dashbaord</Header5>
        <ul>
          {DrawerItem.map(({ name, icon, href }) => (
            <ListStyles active={path === href} key={name}>
              <Link to={href}>
                <Flex justify="flex-start">
                  <Span
                    lineHeight="15px"
                    color={path === href ? " #de8430" : "#918e8c"}
                  >
                    {icon}
                  </Span>
                  <Span
                    lineHeight="15px"
                    color={path === href ? " #de8430" : "#5b5551"}
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
