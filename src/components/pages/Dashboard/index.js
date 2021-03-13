import { Styles } from "./styles";
import { useState } from "react";
import { Flex } from "../../UI_Components/Box/styles";
import {
  // Header2,
  Header5,
  Header4,
  Span,
} from "../../UI_Components/FontSize/styles";
import { Link } from "react-router-dom";
import Overview from "./overview";
import Withdraw from "./withdraw";
import Deposite from "./deposite";
import Transfer from "./transfer";
import Wallet from "./wallet";
import Header from "../../UI_Components/Header";
import Drawer from "../../UI_Components/Drawer";

const Dashboard = () => {
  const [drawerItem, setDrawerItem] = useState(0);

  const changeDrawerItem = (item) => setDrawerItem(item);
  return (
    <Styles className="App">
      <div>
        <Header />

        <Drawer changeDrawerItem={changeDrawerItem} drawerItem={drawerItem} />

        <section>
          {drawerItem === 0 ? (
            <Overview />
          ) : drawerItem === 1 ? (
            <Deposite />
          ) : drawerItem === 2 ? (
            <Withdraw />
          ) : drawerItem === 3 ? (
            <Transfer />
          ) : drawerItem === 4 ? (
            <Wallet />
          ) : null}
        </section>
      </div>
    </Styles>
  );
};

export default Dashboard;
