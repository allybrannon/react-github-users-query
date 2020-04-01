import React, { Component } from "react";
import UserCardList from "./components/UserCardList";
import "./App.css";

class App extends Component {
  state = {
    textInput: "",
    users: []
  };

  handleChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const userName = this.state.textInput;
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const info = await response.json();
    console.log(response);
    this.setState({
      users: [...this.state.users, info]
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Input Github User
            <input
              type="text"
              value={this.state.textInput}
              placeholder="user name"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
          <UserCardList usersInfo={this.state.users} />
        </form>
      </div>
    );
  }
}
export default App;
