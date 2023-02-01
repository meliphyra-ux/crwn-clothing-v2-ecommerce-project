import {Group, FormInputField, FormInputLabel} from './form-input.styles.js';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputField {...otherProps} />
      {label && (
        <FormInputLabel length={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
