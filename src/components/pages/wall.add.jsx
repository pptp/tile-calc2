import React, { PropTypes, Component } from "react"
import { Map, List } from "immutable"
import ReactDOM from "react-dom"

import wallActions from "actions/wall.actions.js"
import tileActions from "actions/tile.actions.js"
import barActions from "actions/bar.actions.js"
import {connect} from "react-redux"
import { bindActionCreators } from "redux";

class Layout extends Component {
  render() {
    const state = this.props.state;
    const walls = state.get("walls");

    return <div className="index">
      Wall Add
    </div>
  }
}


function mapStateToProps(state) {
  return {
    form: state.form,
    state: state.walls
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { ...wallActions, ...tileActions, ...barActions };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);