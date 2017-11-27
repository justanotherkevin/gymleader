import React, { Component } from "react";
import Gymmap from "../components/homeMap";

class Home extends Component {
  render() {
    const hello = () => {
      return <h2>this is some random constant</h2>;
    };
    const avatarStyle ={
      backgroundImage: "url('/src/img/kb1.jpg')"
    };
    return (
      <div className="home-wrapper" >
        <header className="home-header">
          <div className="home-signup-container">
            <div className="intro-text">
              <h2>Welcome To Our Studio! </h2>
            </div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#" >
              Sign me up
            </a>
          </div>
        </header>
        <Gymmap />
        {hello()}
        <h4>Advertisment! Make money</h4>
      </div>
    );
  }
}
export default Home;
