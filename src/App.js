import React, { Component } from "react";
// import GithubUserInfo from "./ZenQuoteAsync-Await";
import GitHubUserFinder from "./GitHubUserFinder";
// import ZenQuote from "./ZenQuote";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ZenQuote /> */}
        <GitHubUserFinder username="facebook" />
        <GitHubUserFinder username="colt" />
        <GitHubUserFinder username="cdsalty" />
      </div>
    );
  }
}

export default App;
