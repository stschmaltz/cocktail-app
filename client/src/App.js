import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import HomePage from "./Home/HomePage";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8888/graphql"
});

const App = () => {
  
  return (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">yo</Route>
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
)};

export default App;
