import React from 'react';
import { Field } from 'formik';

const Textarea = ({ name, ...rest }) => {
  return (
    <Field
      as="textarea"
      name={name}
      {...rest}
    />
  )
}

export default Textarea;