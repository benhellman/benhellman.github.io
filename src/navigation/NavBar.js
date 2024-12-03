import React, { Component } from "react";
import Switch from "react-switch";
import { Link } from "react-router-dom";



class NavBarImp extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
      }
    onThemeSwitchChange(checked) {
        this.setState({ checked });
        this.setTheme();
      }
    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme =
          body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
      }
    render() {
     
        return <nav id="navbar" class="navbar fixed-top  d-flex flex-row">
        <div>
        <Link class="Link btn btn-outline-info my-auto mx-2" to="/">About Me</Link>
        <Link class="Link btn btn-outline-info my-auto mx-2" to="/experience">Experience</Link>
        <Link class="Link btn btn-outline-info my-auto mx-2" to="/resume">Resume</Link>
        </div>
       
        
        <div class="d-flex align-items-end mr5 p2" id="theme-switch">
          <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#ebf5fb"
                onColor="#2e4053"
                className="react-switch mx-auto my-auto"
                width={60}
                height={20}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="tabler:moon-filled"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "90%",
                      fontSize: 20,
                      textAlign: "center",
                      marginLeft: "0px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="mingcute:sun-fill"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "90%",
                      fontSize: 20,
                      textAlign: "center",
                      marginLeft: "15px",
                      color: "#FFFFFF",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
              </div>
        </nav>
}
}

export default NavBarImp;
