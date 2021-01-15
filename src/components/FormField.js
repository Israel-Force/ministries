import React from 'react';
import { TextInput } from './styledComponents';

function FormField({ name, label, ...rest }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <TextInput id={name} name={name} {...rest} />
    </div>
  );
}

export default FormField;
