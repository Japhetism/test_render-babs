"use client";

import React from "react";
import { AuthWrapper, GoogleBtn, FormInput, Button } from "@/components";
import FormMessage from "@/components/auth/FormMessage";
import { useViewModel } from "./useViewmodel";

const Login = () => {
  
  const {
    isLoading,
    errorMessage,
    formData,
    setFormData,
    handleLoginFormSubmission,
    navigateToRegistration,
  }  = useViewModel();

  return (
    <AuthWrapper title="Account Login">
      <div className="flex flex-col items-center justify-start lg:gap-10 gap-7 w-full font-barlow">
        <GoogleBtn onClick={() => console.log("Register with google")} />
        <p className="text-sm text-dark_100 font-medium uppercase text-center">
          - or -
        </p>
        <form
          onSubmit={handleLoginFormSubmission}
          className="flex flex-col items-center justify-start lg:gap-10 gap-7 lg:mt-2 w-full"
        >
          <FormMessage loading={isLoading} errorMessage={errorMessage} />
          <FormInput
            name="username"
            type="email"
            inputMode="email"
            placeholder=" "
            onChange={(e) => setFormData({...formData, username: e.target.value})}
          />
          <FormInput
            name="password"
            type="password"
            inputMode="text"
            placeholder=" "
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <Button
            loading={isLoading}
            type="submit"
            children="Login"
            className="bg-primary_100 w-full mt-[10px] text-white text-center text-base font-semibold hover:opacity-80 py-3"
            onClick={() => console.log("logged")}
          />
          <div className="flex justify-start gap-1 text-dark_100 font-normal text-sm lg:-mt-[15px] -mt-2 w-full">
            <span>Don't have an account ? </span>
            <span
              className="text-primary_100 cursor-pointer"
              onClick={() => navigateToRegistration()}
            >
              {" "}Register
            </span>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Login;
