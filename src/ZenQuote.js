import React, { Component } from "react";
import axios from "axios";

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "" };
  }
  componentDidMount() {
    // load data
    axios.get("https://api.github.com/zen").then(response => {
      // console.log(response); // learn from this that what we actually is response.data
      this.setState({
        quote: response.data
      });
    });
    // set state with the data recieved
  }
  render() {
    return (
      <div>
        <h1>Always Remember...</h1>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default ZenQuote;
