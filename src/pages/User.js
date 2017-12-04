import React, { Component } from "react";
import UserSidebar from '../components/userpage/sidePanel';
class Userpage extends Component {
  render() {
    return (
      <div className="userpage-wrapper"
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div class="container target">
          <div class="row">

            <div class="col-sm-10">
              <h1 class="">Starfox221</h1>
              <button type="button" class="btn btn-success">
                Book me!
              </button>{" "}
              <button type="button" class="btn btn-info">
                Send me a message
              </button>

            </div>

            <div class="col-sm-2">
              <a href="/users" class="pull-right">
                <img
                  title="profile image"
                  class="img-circle img-responsive"
                  src="http://www.rlsandbox.com/img/profile.jpg"
                />
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-3">
              {/* <!--left col--> */}
              <UserSidebar />
            </div>

            {/* <!--/col-3--> */}
            <div class="col-sm-9" contenteditable="false">
              <div class="panel panel-default">
                <div class="panel-heading">Starfox221's Bio</div>
                <div class="panel-body"> A long description about me.</div>
              </div>
              <div class="panel panel-default target">
                <div class="panel-heading" contenteditable="false">
                  Pets I Own
                </div>

                <div class="panel-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img
                          alt="300x200"
                          src="http://lorempixel.com/600/200/people"
                        />
                        <div class="caption">
                          <h3>Rover</h3>
                          <p>Cocker Spaniel who loves treats.</p>
                          <p>soemthing that was left empty</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img
                          alt="300x200"
                          src="http://lorempixel.com/600/200/city"
                        />
                        <div class="caption">
                          <h3>Marmaduke</h3>
                          <p>Is just another friendly dog.</p>
                          <p />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img
                          alt="300x200"
                          src="http://lorempixel.com/600/200/sports"
                        />
                        <div class="caption">
                          <h3>Rocky</h3>
                          <p>Loves catnip and naps. Not fond of children.</p>
                          <p />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">Starfox221's Bio</div>
                <div class="panel-body"> A long description about me.</div>
              </div>
            </div>

            <div id="push" />
          </div>
        </div>
      </div>
    );
  }
}
export default Userpage;
