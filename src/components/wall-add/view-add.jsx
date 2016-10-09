import React, { PropTypes, Component } from 'react'
import { reduxForm } from 'redux-form'
import { Map, List } from 'immutable'
import ReactDOM from 'react-dom'

import style from '../wall/styles.less';

export default class Presentation extends Component {
  render() {
    const {
      onAdd
    } = this.props;

    return  <div className={style.wrapper}>
      <div className={style.wall + ' ' + style.walladd}
          style={{
            backgroundColor: this.context.muiTheme.palette.primary3Color,
            color: this.context.muiTheme.palette.primary1Color,
          }}
          onClick={onAdd}>
      </div>
    </div>
  }
}

Presentation.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

Presentation.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};