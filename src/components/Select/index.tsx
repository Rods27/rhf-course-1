import { forwardRef, SelectHTMLAttributes, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";
import type { TSelectOptionType } from "src/types";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: FieldError;
  options: TSelectOptionType[];
}

const Select = forwardRef(
  (
    { error, options = [], ...props }: Readonly<ISelectProps>,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    return (
      <div className="form-floating mb-3">
        <select
          className={`form-control ${props?.className ?? ""}`}
          ref={ref}
          {...props}
        >
          {options.map((o) => (
            <option key={o.text} value={o.value}>
              {o.text}
            </option>
          ))}
        </select>
        <label htmlFor="customerName">{props.label}</label>
        {error && <p className="error">{error.message}</p>}
      </div>
    );
  },
);

export default Select;
