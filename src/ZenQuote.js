import React, { Component } from "react";
import axios from "axios";

import "./ZenQuote.css";

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "", isLoaded: false };
  }
  componentDidMount() {
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
  render() {
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

export default ZenQuote;

/*  
The spinner... 
  -- added the css and linked it to the js file. 
    - to set when the loader is on display or not, need to create a 'state' for it. 
      - then user conditional logic for when it renders...
*/
