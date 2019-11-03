import React, { Component } from "react";
import IUser from "../../store/interfaces/IUser";

require("./Style.scss");

interface IUserListProps {
  index: number;
  user: IUser;
  getRowData?: () => IUser;
}

interface IUserListState {
  user: IUser;
}

class UserList extends Component<IUserListProps, IUserListState> {
  constructor(props:IUserListProps){
    super(props);
    this.state = {
      user: {
        name: '',
        age: 0,
        location: ''
      },
    }
  }
  public render() {
    const { index, user } = this.props;
    return (
      <tr className={"tableItem"} key={index} >
        <td key={index + 4}>{index + 1}</td>
        <td key={index + 1}>{user.name}</td>
        <td key={index + 2}>{user.location}</td>
        <td key={index + 3}>{user.age}</td>
      </tr>
    );
  }
}

export default UserList;
