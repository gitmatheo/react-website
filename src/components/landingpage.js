import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.pngarts.com/files/3/Avatar-Transparent-Image.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Junior Front-End Developer</h1>
              <hr />
              <p>
                HTML | CSS | Sass | Bootstrap | JavaScript | jQuery | React JS
              </p>
              <div className="social-links">
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {/*LinkedIn*/}
                  <i className="fa fa-linkedin-square" area-hidden="true" />
                  {/*Github*/}
                  <i className="fa fa-github-square" area-hidden="true" />
                  {/*Facebook*/}
                  <i className="fa fa-facebook-square" area-hidden="true" />
                  {/*YouTube*/}
                  <i className="fa fa-youtube-square" area-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
