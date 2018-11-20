import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mateusz Dominiak</h2>
            <img
              src="https://www.pngarts.com/files/3/Avatar-Transparent-Image.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p>
              Odbieraj maile! Chodzą ploty, że ma przyjść trzech nowych
              deweloperów do timu. Sfołarduj mi tego meila, bo fakap był po
              naszej stronie, także musisz lecieć w delegację. Zresztą tim lider
              i tak powiedział, że wyrobimy plan. Miting odpada.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-phone-square" aria-hidden="true" />0 700
                    800 900
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    someonecool@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeId
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
