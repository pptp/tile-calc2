// https://www.npmjs.com/package/react-css-modules
import React, { PropTypes, Component } from 'react'
import { Map, List } from 'immutable'
import ReactDOM from 'react-dom'

import ViewDefault from './view-default'
import ViewEdit from './view-edit'

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleUnedit = this.handleUnedit.bind(this)
  }

  handleEdit() {
    this.setState({edit: true});
  }

  handleUnedit() {
    this.setState({edit: false});
  }

  render() {
    const {
      wall,
      wallKey,
      zoom,

      onSubmit
    } = this.props;

    const {
      edit
    } = this.state;

    const originalSize = wall.get('size')
    const wallName = wall.get('name')

    const size = {
      width: originalSize.get('width') * zoom,
      height: originalSize.get('height') * zoom
    }

    if (edit) {
      return <ViewEdit
          onCancel={this.handleUnedit}
          onSubmit={onSubmit}

          wallKey={wallKey}
          wall={wall}/>
    } else {
      return <ViewDefault
          onEdit={this.handleEdit}

          editable={true}
          name={wallName}
          width={size.width}
          height={size.height} />
    }
  }
}

Container.propTypes = {
  wall: PropTypes.instanceOf(Map).isRequired,
  wallKey: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,

  onSubmit: PropTypes.func
}