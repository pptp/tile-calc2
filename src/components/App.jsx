import React, { Component, PropTypes } from "react";


import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {green100, green500, green700} from "material-ui/styles/colors";

import Main from "./Main"

require("../../node_modules/material-design-icons/iconfont/material-icons.css")

// https://github.com/callemall/material-ui
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
});

class App extends Component {
  render() {
    const {actions, walls} = this.props

    return <MuiThemeProvider muiTheme={muiTheme}>
      <Main />
    </MuiThemeProvider>;
  }
}

export default App