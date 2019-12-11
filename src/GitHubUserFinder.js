import React, { Component } from "react";
import axios from "axios";

class GitHubUserFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      name: ""
    };
  }

  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    // Really take the time to review the response data to see all the options available and what it can truly do with the info provided.
    // console.log(response.data); // see what you get back and this will show you how to call on it deeper within
    this.setState({
      imageUrl: response.data.avatar_url,
      name: response.data.name
    });
  }
  render() {
    return (
      <div>
        <h1>GitHub User Information</h1>
        <img src={this.state.imageUrl} alt={this.state.name} />
      </div>
    );
  }
}

export default GitHubUserFinder;
