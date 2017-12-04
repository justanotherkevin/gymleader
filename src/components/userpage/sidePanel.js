import React, { Component } from 'react';

class UserSidebar extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item text-muted" contenteditable="false">
          Profile
        </li>
        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong className="">Joined</strong>
          </span>{" "}
          2.13.2014
        </li>
        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong className="">Last seen</strong>
          </span>{" "}
          Yesterday
        </li>
        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong className="">Real name</strong>
          </span>{" "}
          Joseph Doe
        </li>
        <li className="list-group-item text-right">
          <span className="pull-left">
            <strong className="">Role: </strong>
          </span>{" "}
          Pet Sitter
        </li>
      </ul>
    )
  }
}
export default UserSidebar;
