import React, { PropTypes, Component } from "react"
import { Map, List } from "immutable"
import ReactDOM from "react-dom"
import {connect} from "react-redux"

import ViewDefault from "./view-default"

class Container extends Component {
  constructor(props) {
    super(props);

    this.handleEditWall = this.handleEditWall.bind(this)
    this.handleAddWall = this.handleAddWall.bind(this)
  }

  handleEditWall() {
    debugger;
  }

  handleAddWall() {
    debugger;
  }

  render() {
    const {
      walls,

      addWall,
    } = this.props;

    return <ViewDefault
        addWall={addWall}
        editWall={this.handleEditWall}
        walls={walls}>
    </ViewDefault>;
  }
}

Container.propTypes = {
  walls: PropTypes.instanceOf(List).isRequired,

  addWall: PropTypes.func.isRequired,
}

export default Container