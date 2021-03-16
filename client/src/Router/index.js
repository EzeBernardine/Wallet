import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../src/components/pages/home";
import Registration from "../../src/components/pages/Registration";
import Login from "../../src/components/pages/Login";
import Overview from "../../src/components/pages/Dashboard/overview";
import Deposit from "../../src/components/pages/Dashboard/deposit";
import Withdraw from "../../src/components/pages/Dashboard/withdraw";
import Transfer from "../../src/components/pages/Dashboard/transfer";
import Settings from "../../src/components/pages/Dashboard/Settings";
import Transactions from "../../src/components/pages/Dashboard/Transactions";
import { isLogin } from "../lib/islogin";

const Error = () => {
  return <p>404 page</p>;
};

const Router = () => {
  console.log(isLogin(), 'token');
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard/deposit" component={Deposit} />
        <Route path="/dashboard/withdraw" component={Withdraw} />
        <Route path="/dashboard/transfer" component={Transfer} />
        <Route path="/dashboard/transactions" component={Transactions} />
        <Route path="/dashboard/settings" component={Settings} />
        <Route path="/dashboard" component={Overview} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
