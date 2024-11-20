import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

import PaystackScreen from "../paystack/Paystack";
import Question from "../Question/Question";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

export default function Flutterwave() {
  const customer = "Nwaiwu chris";
  const email = "nwaiwugetrude@gmail.com";
  const phone = +2348136757488;
  const config = {
    // public_key: "FLWPUBK-**************************-X",
    public_key: "FLWPUBK_TEST-95d837bf78f48d9fd3d5bd42259ab058-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: customer,
    },
    customizations: {
      title: "Traningbe",
      description: "Payment for training",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      if (response.status !== "completed") {
        console.log("Transaction Failed");
      } else {
        console.log("Transaction successful");
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("Transaction cancelled by the user");
    },
  };

  return (
    <div className="App">
      <h1>Hello Test user</h1>
      <div class="form-submit" style={{ cursor: "pointer" }}>
        <FlutterWaveButton {...fwConfig} style={{ cursor: "pointer" }} />
      </div>
      <PaystackScreen />
      <GoogleAuth />
    </div>
  );
}
