import React, { Component } from "react";
import IUser from "../../store/interfaces/IUser";

require("./Style.scss");

interface IUserListProps {
  index: number;
  user: IUser;
  getRowData?: (u: IUser) => IUser;
}

interface IUserListState {
  user: IUser;
}

class UserList extends Component<IUserListProps, IUserListState> {
  constructor(props:IUserListProps){
    super(props);
    this.state = {
      user: {
        name: props.user.name,
        age: props.user.age,
        location: props.user.location
      },
    }
  }
  public render() {
    const { index, user } = this.props;

    return (
      <tr className={"tableItem"} key={index} onDoubleClick={this.getRowData}>
        <td key={index + 4}>{index + 1}</td>
        <td key={index + 1}>{user.name}</td>
        <td key={index + 2}>{user.location}</td>
        <td key={index + 3}>{user.age}</td>
      </tr>
    );
  }
  private getRowData = (): void => {
    if(this.props.getRowData) {
      this.props.getRowData(this.state.user);
    }
  }
}

export default UserList;
