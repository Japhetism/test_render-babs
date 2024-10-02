import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store"
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/redux/auth";

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { replace } = useRouter();
    const { isLoading, responseData, error } = useSelector((state: RootState) => state.auth);
    const [email, setEmail] = useState<string>("");

    const handleForgotPasswordFormSubmission = async () => {
        console.log("email is ", email);
        await dispatch(forgotPassword(email)).unwrap();
    }

    const navigateToLogin = () => {
        replace("/login");
    }

    const navigateToRegistration = () => {
        replace("/register");
    }

    useEffect(() => {
        if (responseData) {

        }
    }, [responseData]);

    return {
        isLoading: isLoading,
        errorMessage: error,
        setEmail: setEmail,
        navigateToLogin: navigateToLogin,
        navigateToRegistration: navigateToRegistration,
        handleForgotPasswordFormSubmission: handleForgotPasswordFormSubmission,
    }
}