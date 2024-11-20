import React from "react";
import "./Index.css";
import PaystackPop from "@paystack/inline-js";
const PaystackScreen = () => {
  const paystackClick = (e) => {
    e.preventDefault();
    const popup = new PaystackPop();

    popup.newTransaction({
      key: "pk_test_9d91319d39c7c9e93f0d8a6faf48ff1a86ef61d0",
      email: "todaysmuziksite@gmail.com",
      firstName: "chris",
      lastName: "Tester",
      amount: 23400,
      onSuccess: (transaction) => {
        console.log(transaction);
        let message = `Payment Completed with Reference${transaction.reference}`;
        alert(message);
      },
      onLoad: (response) => {
        console.log("onLoad: ", response);
      },
      onCancel: () => {
        console.log("onCancel");
      },
      onError: (error) => {
        console.log("Error: ", error.message);
      },
    });
  };

  return (
    <div>
      <form id="paymentForm">
        <div class="form-submit">
          <button type="submit" onClick={paystackClick}>
            {" "}
            Pay With Paystack
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaystackScreen;
