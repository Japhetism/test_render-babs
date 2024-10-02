"use client";

import React from "react";
import { AuthWrapper, GoogleBtn, Button } from "@/components";
import OtpInput from "react-otp-input";
import FormMessage from "@/components/auth/FormMessage";
import { useViewModel } from "./useViewmodel";

const Verify = () => {

  const {
    isLoading,
    errorMessage,
    formData,
    setFormData,
    handleOTPFormSubmission,
    navigateToRegistration,
    navigateToLogin,
    resendOtp,
  }  = useViewModel();

  return (
    <AuthWrapper title="Enter verification code">
      <div className="flex flex-col items-center justify-start lg:gap-10 gap-7 w-full font-barlow">
        <form
          className="flex flex-col items-center justify-start lg:gap-10 gap-7 lg:mt-2 w-full"
          onSubmit={handleOTPFormSubmission}
        >
          <div className="flex flex-col items-center xl:gap-[18px] lg:gap-4 gap-3">
            <FormMessage loading={isLoading} errorMessage={errorMessage} />
            <input type="hidden" name="username" value={formData.email} hidden />
            <input type="hidden" name="code" value={formData.otp} hidden />
            <div className="flex flex-row items-center justify-center xl:gap-12 lg:gap-9 md:gap-6 gap-4 mx-auto w-full font-barlow">
              <OtpInput
                value={formData.otp}
                onChange={(e) => setFormData({...formData, otp: e})}
                numInputs={4}
                inputType="tel"
                shouldAutoFocus
                renderSeparator={
                  <span className="text-transparent xl:px-3 px-2" />
                }
                inputStyle={{
                  width: "100%",
                  height: "100%"
                }}
                renderInput={inputProps =>
                  <div className="lg:w-14 lg:h-14 md:w-[42px] md:h-[42px] w-10 h-10">
                    <input
                      {...inputProps}
                      className={`lg:w-14 lg:h-14 md:w-[42px] md:h-[42px] w-10 h-10 flex flex-col items-center justify-center outline-none focus:outline-none text-[#333] font-semibold xl:text-[28px] lg:text-[22px] md:text-xl text-lg text-center rounded-full border-[2px] ${formData.otp
                        ? "border-[#333]"
                        : "border-[#b9bbbd]"} bg-transparent focus:bg-transparent transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100`}
                    />
                  </div>}
              />
            </div>
            <span
              className={`text-dark_100 cursor-pointer font-normal text-sm ${formData.otp.length ===
              0
                ? "visible"
                : "invisible"}`}
              onClick={() => navigateToLogin()}
            >
              {formData.email}
            </span>
          </div>
          <div className="flex flex-col items-center xl:gap-[18px] lg:gap-4 gap-3 w-full">
            <Button
              loading={isLoading}
              type="submit"
              children="Verify"
              className={`bg-primary_100 py-3 w-full mt-[10px] text-white text-center text-base font-semibold ${formData.otp.length ===
              4
                ? "hover:opacity-80 opacity-100 pointer-events-auto"
                : "opacity-30 pointer-events-none cursor-not-allowed"}`}
              // onClick={() => console.log("logged")}
            />
            <div className="flex justify-center gap-1 text-dark_100 font-normal text-sm w-full">
              <span>You didn't receive a code ? </span>
              <span className="text-red_100 cursor-pointer font-medium" onClick={() => resendOtp()}>
                {" "}Resend
              </span>
            </div>
          </div>
        </form>

        <p className="text-sm text-dark_100 font-medium uppercase text-center -my-3">
          - or -
        </p>
        <GoogleBtn onClick={() => console.log("Register with google")} />
        <div className="flex lg:justify-start justify-center gap-1 text-dark_100 font-normal text-sm lg:mt-[13px] mt-2 w-full">
          <span>Don't have an account ? </span>
          <span className="text-primary_100 cursor-pointer" onClick={() => navigateToRegistration()}> sign up</span>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Verify;
