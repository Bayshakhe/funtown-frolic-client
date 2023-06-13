import React, { useEffect } from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Api_Key);
const Payment = () => {
    const {id} = useParams()
    // const data = useLoaderData()
    console.log(id)

    useEffect(()=> {
        fetch(`http://localhost:5000/selected/payment/${id}`)
        .then(res => res.json())
        .then(data => console.log('price data', data))
        // .catch(error => console.log(error.message))
    },[])

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
