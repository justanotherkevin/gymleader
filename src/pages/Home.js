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
      <div className="home" >
        <header
          className="masthead"
        >
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">
                <span>Welcome To Our Studio! </span>
              </div>
              <div className="intro-heading text-uppercase">
                <span>It's Nice To Meet You </span>
              </div>
              <a
                href="#"
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              >Sign me up
              </a>
            </div>
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
