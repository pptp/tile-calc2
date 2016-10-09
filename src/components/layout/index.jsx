import React, { PropTypes, Component } from "react"
import { Map, List } from "immutable"
import ReactDOM from "react-dom"

import { Link } from "react-router"

import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";


import style from "./styles.less";

export default class Layout extends Component {
  render() {
    return <div className={style.layout}>
      <Paper className={style.panel}>
        {this.props.children}
      </Paper>
    </div>
  }
}