import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store"
import { resetPassword } from "@/redux/auth";

const initialResetPasswordFormData = {
    password: "",
    confirmPassword: "",
}

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, responseData, error } = useSelector((state: RootState) => state.auth);
    const [formData, setFormData] = useState(initialResetPasswordFormData);

    const handleResetPasswordFormSubmission = async () => {
        console.log("reset password form data is ", formData);
        await dispatch(resetPassword(formData)).unwrap();
    }

    useEffect(() => {
        if (responseData) {

        }
    }, [responseData]);

    return {
        isLoading: isLoading,
        errorMessage: error,
        formData: formData,
        setFormData: setFormData,
        handleResetPasswordFormSubmission: handleResetPasswordFormSubmission,
    }
}