import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import HomePage from "./components/Home/HomePage";
import ApolloClient from "apollo-boost";
import DrinkPage from "./components/DrinkPage/DrinkPage";
import NavBar from "./components/NavBar/NavBar";

const client = new ApolloClient({
  uri: "http://localhost:8888/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar/>
        <div className='page-content'>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/randomdrinks">randomdrinks</Route>
            <Route path="/populardrinks">populardrinks</Route>
            <Route path="/browse">browsing</Route>
            <Route path="/drink/:id">
              <DrinkPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
