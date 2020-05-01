import React, { PureComponent } from "react";
import MenuItem from "../components/MenuItem";
import Avatar from "../assets/images/avatar.jpg";
import { NotificationsNone, Menu } from '@material-ui/icons';
import "./Header.style.scss";

class Header extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <header className="App-Header">
        <div className="sidebar-header">
          <div className="sidebar-menu">
            <ul>
              <MenuItem url="#" title="Browse" />
              <MenuItem url="#" title="How it works" />
              <MenuItem url="#" title="Help" />
              <MenuItem url="#" title="About" />
            </ul>
          </div>
        </div>
        <div className="profile-header">
          <div className="profile-name">
            <img className="avatar" src={Avatar} alt="avatar img" />
            Alex Birdsman
          </div>
          <div className="notification">
            <NotificationsNone className="icon" />2
          </div>
          <div className="profile-menu">
            <Menu className="icon" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
