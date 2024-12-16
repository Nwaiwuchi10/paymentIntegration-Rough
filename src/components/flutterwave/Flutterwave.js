import React, { useState } from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

import PaystackScreen from "../paystack/Paystack";
import Question from "../Question/Question";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import { createPayment } from "../../data/Api";
import axios from "axios";

export default function Flutterwave() {
  const [eventId, setEventId] = useState("674f04b88bc228ada7745469");
  const [flutterwavePayment, setFlutterwavePayment] = useState(null);
  const [userId, setUserId] = useState("670f99be4480546600ccabc4");
  const [payStackPayment, setPayStackPayment] = useState({});
  const submitHandler = async (flutterPaymentResponse) => {
    // setLoading(true);
    const data = {
      eventId: eventId,
      userId: userId,
      payStackPayment: payStackPayment,
      flutterwavePayment: flutterPaymentResponse,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(createPayment, data, headers)

      .then((res) => {
        console.log(res.data);
        // setLoading(false);
        if (res.data) {
          setUserId("");
          setEventId("");
          setFlutterwavePayment(null);

          console.log(res.data);
          // toast.success("post sucessful");
        } else {
          // toast.error(res.data.error);
        }
      })
      .catch((err) => {
        // setLoading(false);
        // toast.error("Failed to make payment");
      });
  };
  const customer = "Nwaiwu chris";
  const email = "nwaiwugetrude@gmail.com";
  const phone = +2348136757488;
  const config = {
    // public_key: "FLWPUBK-**************************-X",
    public_key: "FLWPUBK_TEST-95d837bf78f48d9fd3d5bd42259ab058-X",
    tx_ref: Date.now(),
    amount: 200,
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
        console.log("Flutterwave Response:", response);
        setFlutterwavePayment(response);
        submitHandler(response); // Send to backend
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
    </div>
  );
}
