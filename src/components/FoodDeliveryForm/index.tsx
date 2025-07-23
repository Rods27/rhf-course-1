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
  } = useForm<IFormType>({
    criteriaMode: "firstError",
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
              {...register("orderNumber")}
              type="number"
              className="form-control"
              placeholder="Order Number"
              id="orderNumber"
              disabled
            />
            <label htmlFor="orderNumber">Order Number</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
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
            />
            <label htmlFor="phone">Phone number</label>
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-floating mb-3">
            <input
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
              type="text"
              className="form-control"
              placeholder="Customer Name"
              id="customerName"
            />
            <label htmlFor="customerName">Customer name</label>
            {errors.customerName && (
              <p className="error">{errors.customerName.message}</p>
            )}
          </div>
        </div>
        <div className="col">
          <div className="form-floating mb-3">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Incorret email format",
                },
              })}
              type="text"
              className="form-control"
              placeholder="Email"
              id="email"
            />
            <label htmlFor="email">Email</label>
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
