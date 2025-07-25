import { forwardRef, InputHTMLAttributes, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const TextField = forwardRef(
  (
    { error, ...props }: Readonly<ITextFieldProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="form-floating mb-3">
        <input
          className={`form-control ${props?.className ?? ""}`}
          ref={ref}
          {...props}
        />
        <label htmlFor={props.label}>{props.label}</label>
        {error && <p className="error">{error.message}</p>}
      </div>
    );
  },
);

export default TextField;
