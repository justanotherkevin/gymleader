import React, { Component } from 'react';

class UserSidebar extends Component {
  render() {
    return (
      <div>
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

        <ul className="list-group">
          <li className="list-group-item text-muted">
            Activity <i className="fa fa-dashboard fa-1x" />
          </li>
          <li className="list-group-item text-right">
            <span className="pull-left">
              <strong className="">Shares</strong>
            </span>{" "}
            125
          </li>
          <li className="list-group-item text-right">
            <span className="pull-left">
              <strong className="">Likes</strong>
            </span>{" "}
            13
          </li>
          <li className="list-group-item text-right">
            <span className="pull-left">
              <strong className="">Posts</strong>
            </span>{" "}
            37
          </li>
          <li className="list-group-item text-right">
            <span className="pull-left">
              <strong className="">Followers</strong>
            </span>{" "}
            78
          </li>
        </ul>
      </div>
    )
  }
}
export default UserSidebar;
