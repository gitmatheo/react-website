import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education.js";
import Experience from "./experience.js";
import Skills from "./skills.js";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div class="resume-left">
              <img
                src="https://www.pngarts.com/files/3/Avatar-Transparent-Image.png"
                alt="avatar"
              />

              <h2>John Doe </h2>
              <h4>Front-End Developer</h4>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <hr />
              <h5>Address</h5>
              <p>Hacker Street, 00-000 Lodz, Poland</p>
              <h5>Phone</h5>
              <p>(123) 800 9000</p>
              <h5>Email</h5>
              <p>someonecool@gmail.com</p>
              <h5>Web</h5>
              <p>mywebsite.com</p>
              <hr />
            </div>
          </Cell>
          <Cell className="resume-right" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My University"
              schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="My Job"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
            <Experience
              startYear={2012}
              endYear={2018}
              jobName="My Second Job"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <Skills skill="HTML" progress={90} />
            <Skills skill="CSS" progress={80} />
            <Skills skill="JavaScript" progress={60} />
            <Skills skill="React" progress={50} />
            <Skills skill="Wordpress" progress={90} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
