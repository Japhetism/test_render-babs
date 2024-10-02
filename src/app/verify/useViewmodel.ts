import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store"
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { otpValidation } from "@/redux/auth";

const initialOTPFormData = {
    otp: "",
    email: "",
}

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { push, replace } = useRouter();
    const { set, get, remove } = useCookies();
    const authEmail = get("auth-email");
    const { isLoading, responseData, error } = useSelector((state: RootState) => state.auth);
    const [formData, setFormData] = useState(initialOTPFormData);

    const handleOTPFormSubmission = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(otpValidation(formData)).unwrap();
    }

    const resendOtp = () => {

    }

    const navigateToRegistration = () => {
        push("/register");
    }

    const navigateToLogin = () => {
        replace("/login");
    }

    useLayoutEffect(() => {
        if (!authEmail) replace("/login");
        if (authEmail) setFormData({...formData, email: authEmail})
    }, []);

    useEffect(() => {
        if (responseData?.accessToken) {
            remove("auth-email");
            set("accessToken", responseData.accessToken, {
                expires: 60 * 60
            });
            set("refreshToken", responseData.refreshToken, {
                expires: 60 * 60
            })
            replace("/dashboard");
        }
    }, [responseData]);

    return {
        isLoading: isLoading,
        errorMessage: error,
        formData: formData,
        setFormData: setFormData,
        handleOTPFormSubmission: handleOTPFormSubmission,
        navigateToRegistration: navigateToRegistration,
        navigateToLogin: navigateToLogin,
        resendOtp: resendOtp,
    }
}