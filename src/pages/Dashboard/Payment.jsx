import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Api_Key);
const Payment = () => {
  return (
    <div className=" min-h-screen pt-20 bg-teal">
      <div className="overflow-x-auto m-14 w-2/3 mx-auto bg-white p-5">
        <p className="text-center text-2xl mb-5">Payment</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
