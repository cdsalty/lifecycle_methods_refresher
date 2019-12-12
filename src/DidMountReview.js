import React, { Component } from "react";
import axios from "axios";

import "./ZenQuote.css";

class DidMountReview extends Component {
  constructor(props) {
    console.log("FIRST.... the constructor takes place");
    super(props);
    this.state = { quote: "", isLoaded: false };
  }
  componentDidMount() {
    console.log(
      "THIRD the componentDidMount takes place and only the first time"
    );
    // load data
    axios.get("https://api.github.com/zen").then(response => {
      // console.log(response); // learn from this that what we actually is response.data
      setTimeout(
        function() {
          this.setState({
            quote: response.data,
            isLoaded: true
          });
        }.bind(this),
        3000
      );
    });
    // set state with the data recieved
  }

  componentDidUpdate() {
    console.log("LASTLY the componentDidMount is HERE!!");
  }
  render() {
    console.log(
      "SECOND and then will be the FOURTH event, we come all the way down and call on RENDER"
    );
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always Remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader" />
        )}
      </div>
    );
  }
}

export default DidMountReview;
