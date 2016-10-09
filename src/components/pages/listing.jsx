import React, { PropTypes, Component } from "react"
import {Map, List} from "immutable"
import ReactDOM from "react-dom"

import * as wallActions from "../../actions/wall.actions.js"
import * as tileActions from "actions/tile.actions.js"
import * as barActions from "actions/bar.actions.js"
import {connect} from "react-redux"
import {bindActionCreators} from "redux";

import { browserHistory } from 'react-router'

import WallList from "../wall-list"

class Layout extends Component {
  render() {
    const state = this.props.state;
    const walls = state.get("walls");

    const {
      setNewEditableWall
    } = this.props.actions;

    const addWall = () => {
      setNewEditableWall();
      browserHistory.push("/wall/add")
    }

    return <div>
      <WallList
          walls={walls}
          addWall={addWall}
      />
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