import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/components/pages/home";
import Registration from "../src/components/pages/Registration";
import Login from "../src/components/pages/Login";
import Overview from "../src/components/pages/Dashboard/overview";
import Deposite from "../src/components/pages/Dashboard/deposite";
import Withdraw from "../src/components/pages/Dashboard/withdraw";
import Transfer from "../src/components/pages/Dashboard/transfer";
import Settings from "../src/components/pages/Dashboard/Settings";
import Transactions from "../src/components/pages/Dashboard/Transactions";

import reportWebVitals from "./reportWebVitals";

const Error = () => {
  return <p>404 page</p>;
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard/deposite" component={Deposite} />
      <Route path="/dashboard/withdraw" component={Withdraw} />
      <Route path="/dashboard/transfer" component={Transfer} />
      <Route path="/dashboard/transactions" component={Transactions} />
      <Route path="/dashboard/settings" component={Settings} />
      <Route path="/dashboard" component={Overview} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your Home, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
