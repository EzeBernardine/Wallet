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

const Dashboard = () => {
  const [draerItem, setDrawerItem] = useState(0);
  return (
    <Styles className="App">
      <aside>
        <Flex margin="0 0 50px 0" justify="flex-start">
          <Link to="./">
            <Header4 color="#673a1e" bold>
              Wallet
            </Header4>
          </Link>
        </Flex>

        <div className="drawer">
          <Header5 color="#673a1e">My Dashbaord</Header5>
          <ul>
            <li>
              <button onClick={() => setDrawerItem(0)}> Overview</button>
            </li>
            <li>
              <button onClick={() => setDrawerItem(1)}> Deposite</button>
            </li>
            <li>
              <button onClick={() => setDrawerItem(2)}> Withdraw</button>
            </li>
            <li>
              <button onClick={() => setDrawerItem(3)}> Transfer</button>
            </li>
            <li>
              <button onClick={() => setDrawerItem(4)}> Wallet</button>
            </li>
            {/* <li>Reverse Transaction</li> */}
            <li>
              <Link to="/"> Log out</Link>
            </li>
          </ul>
        </div>
      </aside>

      <div>
        <header>
          <Flex height="100%" justify="flex-end">
            <Header4 color="#673a1e"> Welcome</Header4>
            <Span color="#2c2d2d">Anonymous Obinna</Span>
          </Flex>
        </header>

        <section>
          {draerItem === 0 ? (
            <Overview />
          ) : draerItem === 1 ? (
            <Withdraw />
          ) : draerItem === 2 ? (
            <Deposite />
          ) : draerItem === 3 ? (
            <Transfer />
          ) : draerItem === 4 ? (
            <Wallet />
          ) : null}
        </section>
      </div>
    </Styles>
  );
};

export default Dashboard;
