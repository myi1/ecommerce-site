import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./FormInput.styles";

export default function FormInput({ handleChange, label, ...props }) {
  return (
    <GroupContainer className='group'>
      <FormInputContainer
        className='form-input'
        onChange={handleChange}
        {...props}
      />
      {label ? (
        <FormInputLabel className={props.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
}
