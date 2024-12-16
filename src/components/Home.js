import React from "react";
import PaystackScreen from "./paystack/Paystack";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import Flutterwave from "./flutterwave/Flutterwave";
import QRScanner from "./Qr/Qr";
import QrCodeScanner from "./Qr/QrReader";
import UserList from "./Users/Users";
import QRGenerator from "./Qr/Qr";
import UsersInfo from "./Users/UsersInfo";
import ParticlesBackhround from "./ParticlesBackhround";

const HomePage = () => {
  return (
    <div>
      <Flutterwave />
      <PaystackScreen />
      <GoogleAuth />
      {/* <UserList /> */}
      <UsersInfo />
      <QRGenerator />
      {/* <QrCodeScanner /> */}
      {/* <QRScanner /> */}
    </div>
  );
};

export default HomePage;
