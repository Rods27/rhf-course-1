import { useForm } from "react-hook-form";
import Select from "src/controls/Select";
import TextField from "src/controls/TextField";
import { SelectOptionType } from "src/types";

const paymentOptions: SelectOptionType[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Paid online" },
  { value: "cod", text: "Cash on delivery" },
];

const deliveryOptions: SelectOptionType[] = [
  { value: 0, text: "Select" },
  { value: 30, text: "Half an Hour" },
  { value: 60, text: "1 Hour" },
  { value: 120, text: "2 Hour" },
  { value: 180, text: "3 Hour" },
];

export const FoodDeliveryForm = () => {
  interface IFormType {
    customerName: string;
    phone: string;
    orderNumber: number;
    email: string;
    paymentMethod: string;
    deliveryWithin: string;
    streetAddres: string;
    landmark: string;
    city: string;
    state: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormType>({
    criteriaMode: "firstError",
    defaultValues: {
      orderNumber: new Date().valueOf(),
      phone: "",
      email: "",
      paymentMethod: "",
      deliveryWithin: "",
      streetAddres: "",
      landmark: "",
      city: "",
      state: "",
    },
  });

  const onSubmit = (formData: IFormType) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            type="text"
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
      list of food items
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
