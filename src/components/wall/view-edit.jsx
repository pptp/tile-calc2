import React, { PropTypes, Component } from 'react'
import { reduxForm } from 'redux-form'
import { Map, List } from 'immutable'
import ReactDOM from 'react-dom'

import style from './styles.less';

import Form from '../forms/wall-general'

export const fields = [
  'width',
  'height'
];

export default class Presentation extends Component {
  render() {
    const {
      onSubmit,
      onCancel,

      wall,
      wallKey
    } = this.props;

    const values = {
      name: wall.get("name"),
      width: wall.get("size").get("width"),
      height: wall.get("size").get("height")
    }

    return  <div className={style.wrapper}>
      <div className={style.wall + ' ' + style.walledit}
          style={{
            borderColor: this.context.muiTheme.palette.primary1Color,
          }}>

        <Form
            formKey={wallKey} 
            onCancel={onCancel}
            onSubmit={onSubmit}
            initialValues={values}>
        </Form>

      </div>
    </div>
  }
}

Presentation.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,

  wall: PropTypes.instanceOf(Map),
  wallKey: PropTypes.number.isRequired,
}

Presentation.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};