import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/components/pages/home";
import Registration from "../src/components/pages/Registration";
import Dashboard from "../src/components/pages/Dashboard";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const Error = () => {
  return <p>404 page</p>;
};
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/registration" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={Error} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your Home, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
