import React, { PureComponent } from "react";
import contentBackground from "../assets/images/background.png";
import "./SidebarContainer.style.scss";

class SidebarContainer extends PureComponent {
  componentDidMount() {}

  openNewTab = () => {
    const url = "https://www.google.com";
    window.open(url, "_blank");
  }

  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-content">
          <div className="content-title">
            <h1>Welcome! Thanks for joining us</h1>
          </div>
          <div className="content-img">
            <img src={contentBackground} alt="content background" />
          </div>
          <div className="content-button">
            <button onClick={this.openNewTab}>Set up your account</button>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="footer-title">Description</div>
          <div className="footer-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarContainer;
