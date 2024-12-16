import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
const GoogleAuth = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="556886859366-hq5cphp70fmvafvop0csb96i2nkvbffh.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse);
            const response = await axios.post(
              "https://api.ogini.com/auth/google-login",

              {
                token: credentialResponse.credential,
              }
            );
            const data = response.data;
            localStorage.setItem("authData", data);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleAuth;
