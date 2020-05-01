import React, { PureComponent } from "react";
import ProfileItem from "../components/ProfileItem";
import getUsers from "../services/profileService";
import "./MainContainer.style.scss";

class MainContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      userData: [],
      sortOrder: true,
      count: 10,
    };
  }
  componentDidMount() {
    getUsers(2).then((result) => {
      let data = result.data.sort((item1, item2) =>
        item1.first_name > item2.first_name ? 1 : -1
      );
      if (data.length > 10) {
        data = data.slice(0, 9);
      }
      this.setState({
        userData: data,
      });
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="profile-container">
          <div className="title">
            <h2>Profile list</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="content">
            {this.state.userData.map((item, index) => (
              <ProfileItem key={`profile-item-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
