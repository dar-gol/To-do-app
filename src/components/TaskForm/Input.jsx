import React from 'react';
import { Field } from 'formik';

const Input = ({ name, ...rest }) => {
  return (
    <Field
      as="input"
      name={name}
      {...rest}
    />
  )
}

export default Input;