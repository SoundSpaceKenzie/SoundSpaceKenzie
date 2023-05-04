import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { StyleInput } from './style';

interface IInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef(
  (
    { id, label, error, children, ...rest }: IInputsProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyleInput>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input id={id} ref={ref} {...rest} />
        {error ? <span>{error}</span> : null}
        {children}
      </StyleInput>
    );
  }
);
