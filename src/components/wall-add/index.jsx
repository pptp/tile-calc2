// https://www.npmjs.com/package/react-css-modules
import React, { PropTypes, Component } from 'react'
import { Map, List } from 'immutable'
import ReactDOM from 'react-dom'

import ViewAdd from './view-add'

export default class Container extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {onAdd} = this.props;

    return <ViewAdd onAdd={onAdd} />
  }
}

Container.propTypes = {
  onAdd: PropTypes.func
}