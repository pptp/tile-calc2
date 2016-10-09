import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
// import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import style from "./forms.less"

import { rNumericValidator } from '../../utils/validators'

export const fields = [
  'width',
  'height',
  'name'
];

const validate = values => {
  const errors = {}
  errors.width = rNumericValidator(values.width);
  errors.height = rNumericValidator(values.height);
  return errors;
}

class Form extends Component {
  cancel() {
    const {
      resetForm,
      onCancel
    } = this.props;

    resetForm();
    onCancel();
  }

  constructor(props) {
    super(props);

    this.cancel = this.cancel.bind(this);
  }

  render() {
    const {
      fields: {
        width,
        height,
        name
      },

      handleSubmit,
      resetForm,
      submitting,
      errors,
      dirty
    } = this.props

    // console.log(this.props);
    // console.log(width);
    const submitDisabled = !!Object.keys(errors).length || !dirty

    return <form
        className={style.form}
        onSubmit={handleSubmit}>

      <TextField
          hintText="Name"
          fullWidth={true}
          name={name.name}
          onChange={name.onChange}
          errorText={name.error}
          value={name.value} />
      <br />

      <TextField
          hintText="Width"
          fullWidth={true}
          name={width.name}
          onChange={width.onChange}
          errorText={width.error}
          value={width.value} />
      <br />

      <TextField
          hintText="Height"
          fullWidth={true} 
          name={height.name}
          onChange={height.onChange}
          errorText={height.error}
          value={height.value} />
      <br />

      <br />
      <br />

      <FlatButton
          disabled={submitting}
          label="Cancel"
          secondary={true}
          onClick={this.cancel} />

      <RaisedButton
          label="Change"
          primary={true}
          disabled={submitting || submitDisabled}
          onClick={handleSubmit} />
    </form>;
  }
}


Form.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm(
  {
    form: 'formWall',
    fields,
    validate
  },
  (state, component) => component.initialValues
  /*
  {
    const init = {};
    fields.forEach(field => init[field] = component[field]); 
    debugger;
    return {initialValues: init};
  }
  */
) (Form)