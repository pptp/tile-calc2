import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

import style from './styles.less';

import FontIcon from 'material-ui/FontIcon';

// export default function Presentation(props) {
export default class Presentation extends Component {
  render() {
    const {
      width,
      height,
      name,
      editable,

      onEdit
    } = this.props;

    return  <div className={style.wrapper}>
      <div className={style.wall}
          style={{
            width: width,
            height: height,
            borderColor: this.context.muiTheme.palette.primary1Color,
            backgroundColor: this.context.muiTheme.palette.primary3Color
          }}>

        <div className={style.meta}
            onClick={onEdit}>
          
          <span className={style.name}>
            {name}
          </span>

          <FontIcon
              style={{color: this.context.muiTheme.palette.primary1Color}}
              className={style.editicon + " material-icons"}>
            edit
          </FontIcon>
        </div>

      </div>
    </div>
  }
}

Presentation.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,

  onEdit: PropTypes.func
}

Presentation.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};