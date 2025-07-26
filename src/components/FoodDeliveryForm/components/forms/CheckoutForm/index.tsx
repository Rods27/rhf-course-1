import { useFormContext, useFormState } from "react-hook-form";
import Select from "src/components/Select";
import { useRenderCount } from "src/hooks/useRenderCount";
import { TSelectOptionType } from "src/types";
import type { TCheckoutFormType } from "src/types";

// eslint-disable-next-line react-hooks/rules-of-hooks
const RenderCount = useRenderCount({ name: "CheckoutForm" });

export const CheckoutForm = () => {
  const paymentOptions: TSelectOptionType[] = [
    { value: "", text: "Select" },
    { value: "online", text: "Paid online" },
    { value: "cod", text: "Cash on delivery" },
  ];

  const deliveryOptions: TSelectOptionType[] = [
    { value: 0, text: "Select" },
    { value: 30, text: "Half an Hour" },
    { value: 60, text: "1 Hour" },
    { value: 120, text: "2 Hour" },
    { value: 180, text: "3 Hour" },
  ];

  const { register } = useFormContext<TCheckoutFormType>();

  const { errors } = useFormState<TCheckoutFormType>({
    name: ["deliveryWithin", "paymentMethod"],
    exact: true,
  });

  return (
    <>
      <RenderCount />
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <Select
              {...register("paymentMethod", {
                required: "Select an option.",
              })}
              id="paymentMethod"
              label="Payment method"
              options={paymentOptions}
              error={errors.paymentMethod}
            />
          </div>
        </div>
        <div className="col">
          <Select
            {...register("deliveryWithin", {
              required: "Select an option.",
            })}
            id="deliveryWithin"
            label="Delivery within"
            options={deliveryOptions}
            error={errors.paymentMethod}
          />
        </div>
      </div>
    </>
  );
};
