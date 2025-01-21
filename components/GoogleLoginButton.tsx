"use client";
// components/GoogleLoginButton.tsx
import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton: React.FC = () => {
  const [idToken, setIdToken] = useState<string | null>(null);

  const handleLoginSuccess = (token: string) => {
    setIdToken(token);
  };
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            console.log("Login Failed");
            handleLoginSuccess(credentialResponse.credential); // Get the ID token here
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
