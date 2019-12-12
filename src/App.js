import React, { Component } from "react";
// import ZenQuoteAsync-Await from "./ZenQuoteAsync-Await";
// import GitHubUserFinder from "./GitHubUserFinder";
// import ZenQuote from "./ZenQuote";
import DidMountReview from "./DidMountReview";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ZenQuote /> */}
        {/* <GitHubUserFinder username="facebook" />
        <GitHubUserFinder username="colt" />
        <GitHubUserFinder username="cdsalty" /> */}
        <DidMountReview />
      </div>
    );
  }
}

export default App;
