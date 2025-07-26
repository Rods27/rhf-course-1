import { ButtonHTMLAttributes } from "react";
import { Control, useFormState } from "react-hook-form";

import { IFormType } from "src/types";

interface ISubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  control?: Control<IFormType, IFormType>;
}
export const SubmitButton = ({ control, ...props }: ISubmitButtonProps) => {
  const formState = useFormState({ control });

  return (
    <button
      {...props}
      type="submit"
      className={`btn ${props.className}`}
      disabled={formState.isSubmitting}
    >
      {formState.isSubmitting && (
        <span className="spinner-border spinner-border-sm" aria-hidden="true" />
      )}
      <span className="px-2">{props.value}</span>
    </button>
  );
};
