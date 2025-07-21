import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";

export const FoodDeliveryForm = () => {
  interface IFormType {
    customerName: string;
    phone: string;
    orderNumber: number;
    email: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    control,
  } = useForm<IFormType>({
    defaultValues: {
      orderNumber: new Date().valueOf(),
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
            <input
              {...register("orderNumber", {
                required: "OrderNumber is required",
              })}
              type="number"
              className="form-control"
              placeholder="Order Number"
              onChange={() => clearErrors("orderNumber")}
              id="orderNumber"
              disabled
            />
            <label htmlFor="orderNumber">Order Number</label>
            {errors.orderNumber && <p>{errors.orderNumber.message}</p>}
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              {...register("phone", {
                required: "Phone is required",
              })}
              type="text"
              className="form-control"
              onChange={() => clearErrors("phone")}
              id="phone"
            />
            <label htmlFor="phone">Phone number</label>
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-floating mb-3">
            <input
              {...register("customerName", {
                required: "Customer name is required",
              })}
              type="text"
              className="form-control"
              placeholder="Customer Name"
              onChange={() => clearErrors("customerName")}
              id="customerName"
            />
            <label htmlFor="customerName">Customer name</label>
            {errors.customerName && <p>{errors.customerName.message}</p>}
          </div>
        </div>
        <div className="col">
          <div className="form-floating mb-3">
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={() => clearErrors("email")}
              id="email"
            />
            <label htmlFor="email">Email</label>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
