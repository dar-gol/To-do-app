import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <>
      <label className="label" htmlFor={props.name}>{props.label}</label>
      <DatePicker
        {...field}
        {...props}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        selected={(field.value && new Date(field.value)) || null}
        onChange={val => {
          setFieldValue(field.name, val);
        }}
      />
    </>
  );
};

export default DatePickerField;