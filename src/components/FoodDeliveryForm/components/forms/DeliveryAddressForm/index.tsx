import { useFormContext, useFormState } from "react-hook-form";
import TextField from "src/components/TextField";
import { useRenderCount } from "src/hooks/useRenderCount";
import type { TDeliveryFormType } from "src/types";

// eslint-disable-next-line react-hooks/rules-of-hooks
const RenderCount = useRenderCount({ name: "DeliveryAdressForm" });

export const DeliveryAddressForm = () => {
  const { register } = useFormContext<{ address: TDeliveryFormType }>();

  const { errors } = useFormState<{ address: TDeliveryFormType }>({
    name: [
      "address.city",
      "address.landmark",
      "address.state",
      "address.streetAddress",
    ],
    exact: true,
  });

  return (
    <>
      <RenderCount />
      <div className="row mb-3">
        <div className="col">
          <TextField
            {...register("address.streetAddress", {
              required: "This field is required",
            })}
            className="form-control"
            placeholder="Street Address"
            id="address"
            error={errors.address?.streetAddress}
            label="Street Address"
          />
        </div>
        <div className="col">
          <TextField
            {...register("address.city", {
              required: "This field is required",
            })}
            className="form-control"
            placeholder="city"
            id="city"
            error={errors.address?.city}
            label="City"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            {...register("address.landmark", {
              required: "This field is required",
            })}
            className="form-control"
            placeholder="landmark"
            id="landmark"
            label="Landmark"
          />
        </div>
        <div className="col">
          <TextField
            {...register("address.state", {
              required: "This field is required",
            })}
            className="form-control"
            placeholder="state"
            id="state"
            label="State"
          />
        </div>
      </div>
    </>
  );
};
