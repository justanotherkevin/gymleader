import React, { Component } from "react";
import Gymmap from "../components/homeMap";
import secret from "../secret.json";

class Home extends Component {
  render() {
    const mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=63.259591,-144.667969&zoom=6&size=400x400&markers=color:blue%7Clabel:S%7C62.107733,-145.541936&markers=size:tiny%7Ccolor:green%7CDelta+Junction,AK&markers=size:mid%7Ccolor:0xFFFF00%7Clabel:C%7CTok,AK"&key=${secret.googleMapKey}`

    const hello = () => {
      return <h2>this is some random constant</h2>;
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
        <div className="home-map-wrapper">
          <img src={mapURL} ></img>
        </div>
        {hello()}
      </div>
    );
  }
}
export default Home;
