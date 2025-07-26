export type TSelectOptionType = {
  value: string | number;
  text: string;
};

export type TCheckoutFormType = {
  paymentMethod: string;
  deliveryWithin: string;
};

export type TDeliveryFormType = {
  streetAddress: string;
  landmark: string;
  city: string;
  state: string;
};

export type TUserInfoFormType = {
  customerName: string;
  phone: string;
  orderNumber: number;
  email: string;
};

export interface IFormType
  extends TCheckoutFormType,
    TDeliveryFormType,
    TUserInfoFormType {
  address: TDeliveryFormType;
}
