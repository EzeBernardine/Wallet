import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../../src/components/pages/home";
import Registration from "../../src/components/pages/registration";
import Login from "../../src/components/pages/login";
import Overview from "../../src/components/pages/Dashboard/overview";
import Deposit from "../../src/components/pages/Dashboard/deposit";
import Withdraw from "../../src/components/pages/Dashboard/withdraw";
import Transfer from "../../src/components/pages/Dashboard/transfer";
import Settings from "../../src/components/pages/Dashboard/settings";
import Transactions from "../../src/components/pages/Dashboard/Transactions";
import { isLogin } from "../lib/islogin";

const Error = () => {
  return <p>404 page</p>;
};
const PrivateRoute = (props) => {
  return isLogin() ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};

const PublicRoute = (props) => {
  return isLogin() ? (
    <Redirect to="/dashboard" />
  ) : (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* route the user to the dashboard on click of the home page if he has active token, else, remain on the home page */}
        <PublicRoute path="/" component={Home} exact />

        <Route path="/login" component={Login} exact />
        <Route path="/registration" component={Registration} />

        {/* route the user to the dashboard if he is logged in, else, take him to the login screen*/}
        <PrivateRoute path="/dashboard/deposit" component={Deposit} />
        <PrivateRoute path="/dashboard/withdraw" component={Withdraw} />
        <PrivateRoute path="/dashboard/transfer" component={Transfer} />
        <PrivateRoute path="/dashboard/transactions" component={Transactions} />
        <PrivateRoute path="/dashboard/settings" component={Settings} />
        <PrivateRoute path="/dashboard" component={Overview} />

        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
