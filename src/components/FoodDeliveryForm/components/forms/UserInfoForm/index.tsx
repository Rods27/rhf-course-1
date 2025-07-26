import { useFormContext, useFormState } from "react-hook-form";
import TextField from "src/components/TextField";
import { useRenderCount } from "src/hooks/useRenderCount";
import type { TUserInfoFormType } from "src/types";

// eslint-disable-next-line react-hooks/rules-of-hooks
const RenderCount = useRenderCount({ name: "UserInfoForm" });

export const UserInfoForm = () => {
  const { register } = useFormContext<TUserInfoFormType>();

  const { errors } = useFormState<TUserInfoFormType>({
    name: ["orderNumber", "customerName", "phone", "email"],
    exact: true,
    // disabled: true, // disable form  re-render
  });

  return (
    <>
      <RenderCount />
      <div className="row mb-3">
        <div className="col">
          <div className="form-floating">
            <TextField
              {...register("orderNumber")}
              className="form-control"
              placeholder="Order Number"
              id="orderNumber"
              label="Order Number"
              disabled
            />
          </div>
        </div>
        <div className="col">
          <TextField
            {...register("phone", {
              required: "Phone is required",
              minLength: {
                value: 10,
                message: "Must be at least 10 digits",
              },
              pattern: {
                value: /\d+/,
                message: "Only numbers allowed",
              },
              maxLength: 11,
            })}
            maxLength={11}
            type="tel"
            className="form-control"
            id="phone"
            error={errors.phone}
            label="Phone number"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextField
            className="form-control"
            placeholder="Customer Name"
            id="customerName"
            label="Customer Name"
            {...register("customerName", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 30,
                message: "Maximum 30 characters",
              },
            })}
            error={errors.customerName}
          />
        </div>
        <div className="col">
          <div className="form-floating mb-3">
            <TextField
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Incorret email format",
                },
              })}
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              error={errors.email}
              label="Email"
            />
          </div>
        </div>
      </div>
    </>
  );
};
