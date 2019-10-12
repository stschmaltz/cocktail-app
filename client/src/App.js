import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import HomePage from "./Home/HomePage";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8888/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomePage />
      </header>
    </div>
  </ApolloProvider>
);

export default App;
