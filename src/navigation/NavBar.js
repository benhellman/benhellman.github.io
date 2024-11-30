import React, { Component } from "react";
import Switch from "react-switch";

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
        return   <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">About Me <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#">Projects</a>
        <a class="nav-item nav-link" href="#">Resume</a>
        <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#ebf5fb"
                onColor="#2e4053"
                className="react-switch mx-auto my-auto"
                width={60}
                height={20}
                uncheckedIcon={
                        <img src = "https://www.flaticon.com/free-icons/moon"></img>
                //   <span
                //     className="iconify"
                //     data-icon="twemoji:owl"
                //     data-inline="false"
                //     style={{
                //       display: "block",
                //       height: "100%",
                //       fontSize: 25,
                //       textAlign: "end",
                //       marginLeft: "20px",
                //       color: "#353239",
                //     }}
                //   ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
        </div>
        </div>
        </nav>

}
}

export default NavBarImp;
