"use client";

import React from "react";
import { AuthWrapper, GoogleBtn, FormInput, Button } from "@/components";
import { z } from "zod";
import FormMessage from "@/components/auth/FormMessage";
import { useViewModel } from "./useViewmodel";

const registerSchema = z.object({
  fullName: z.string().min(5, "Full name must be at least 5 characters long"),
  emailAddress: z.string().email("Email address must be valid"),
  password: z.string().min(5, "Password must be at least 5 characters long")
});

const Register = () => {
  const {
    isLoading,
    errorMessage,
    formData,
    setFormData,
    handleRegistrationFormSubmission,
    navigateToLogin,
  } = useViewModel();

  return (
    <AuthWrapper title="Create Account">
      <div className="flex flex-col items-center justify-start lg:gap-10 gap-7 w-full font-barlow">
        <GoogleBtn onClick={() => console.log("Register with google")} />
        <p className="text-sm text-dark_100 font-medium uppercase text-center">
          - or -
        </p>
        <form
          onSubmit={handleRegistrationFormSubmission}
          className="flex flex-col items-center justify-start lg:gap-10 gap-7 lg:mt-2 w-full"
        >
          <FormMessage loading={isLoading} errorMessage={errorMessage} />
          <FormInput
            name="fullName"
            type="text"
            inputMode="text"
            placeholder=" "
          />
          <FormInput
            name="emailAddress"
            type="email"
            inputMode="email"
            placeholder=" "
          />
          <FormInput
            name="password"
            type="password"
            inputMode="text"
            placeholder=" "
          />
          <FormInput
            name="confirmPassword"
            type="password"
            inputMode="text"
            placeholder=" "
          />
          <Button
            loading={isLoading}
            type="submit"
            children="Create Account"
            className="bg-primary_100 w-full mt-[10px] text-white text-center text-base font-semibold hover:opacity-80 py-3"
          />
          <div className="flex justify-start gap-1 text-dark_100 font-normal text-sm lg:-mt-[15px] -mt-2 w-full">
            <span>Already have an account ? </span>
            <span
              className="hover:text-primary_100 cursor-pointer"
              onClick={() => navigateToLogin()}
            >
              {" "}Login
            </span>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Register;
