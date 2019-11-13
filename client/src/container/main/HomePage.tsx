import React, { Component } from "react";
import { connect } from "react-redux";
import IUser from "../../store/interfaces/IUser";
import UserList from "../../component/userlist/UserList";

interface IHomeProps {
  users: IUser[];
  getUserThunk: any;
}

interface ITitle {
  no: string;
  name: string;
  location: string;
  age: string;
}

interface IHomeState {
  newTitles: ITitle;
}

class HomePage extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      newTitles: {
        no: "No.",
        name: "Name",
        location: "Location",
        age: "Age"
      }
    };
  }

  public render() {
    const { no, name, location, age } = this.state.newTitles;

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <thead>
            <tr>
              <th>{no}</th>
              <th>{name}</th>
              <th>{location}</th>
              <th>{age}</th>
            </tr>
          </thead>
          <tbody>{this.generateUserList()}</tbody>
        </table>
      </div>
    );
  }

  private generateUserList = (): JSX.Element[] | undefined => {
    const { users } = this.props;

    if (users) {
      return users.map(
        (u: IUser, i: number): JSX.Element => (
          <UserList user={u} index={i} getRowData={this.getRow} />
        )
      );
    } else {
      return void 0;
    }
  };

  private getRow = (u: IUser): IUser => {
    return u;
  };
  
}

export default connect()(HomePage);
