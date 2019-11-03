import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { GlobalState } from "./store";
import HomePage from "./container/main/HomePage";
import IUserState from "./store/interfaces/IUserState";
import {getUserThunk} from './store/actions';
import Button from "./component/button/Button";

const mapStateToProps = (state: GlobalState) => ({
  users: state.users
});

interface IAppProps {
  users: IUserState;
  getUserThunk: any
}

class App extends React.Component<IAppProps, object> {

  public render() {
    return (
      <div className="App">
        <h1>React, Redux and Typescript Example</h1>
        <Button title={"Get List"} onClick={this.props.getUserThunk}/>
        <HomePage users={this.props.users.users} getUserThunk={this.props.getUserThunk}/>
      </div>
    );
  }
}
export default connect(mapStateToProps,{getUserThunk})(App);
