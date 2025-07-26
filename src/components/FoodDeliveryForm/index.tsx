import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { CheckoutForm } from "./components/forms/CheckoutForm";
import { IFormType } from "src/types";
import { DeliveryAddressForm } from "./components/forms/DeliveryAddressForm";
import { UserInfoForm } from "./components/forms/UserInfoForm";
import { SubmitButton } from "./components/SubmitButton";
import { useRenderCount } from "src/hooks/useRenderCount";

// eslint-disable-next-line react-hooks/rules-of-hooks
const RenderCount = useRenderCount({ name: "FoodDeliveryForm" });

export const FoodDeliveryForm = () => {
  const methods = useForm<IFormType>({
    mode: "onChange",
    defaultValues: {
      orderNumber: new Date().valueOf(),
      customerName: "",
      phone: "",
      email: "",
      paymentMethod: "",
      deliveryWithin: "",
      address: {
        streetAddress: "",
        landmark: "",
        city: "",
        state: "",
      },
    },
  });

  const { handleSubmit, control, getFieldState } = methods;

  const onSubmit = async (formData: IFormType) => {
    // mocking a delay for loading view
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log(formData);
  };

  const onError = async (err: FieldErrors) => {
    console.log(err);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <RenderCount />
      <FormProvider {...methods}>
        <UserInfoForm />
        <h6 className="text-start fw-bold mt-4 mb-2">Checkout Details</h6>
        <CheckoutForm />
        <DeliveryAddressForm />
        <SubmitButton className="btn-light" value="Submit" control={control} />
      </FormProvider>
    </form>
  );
};
