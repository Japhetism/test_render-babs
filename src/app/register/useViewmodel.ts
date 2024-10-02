import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store"
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { IRegistration } from "@/types/registration";
import { userRegistration } from "@/redux/auth";

const initialLoginFormData: IRegistration = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { push } = useRouter();
    const { set } = useCookies();
    const { isLoading, responseData, error } = useSelector((state: RootState) => state.auth);

    const [formData, setFormData] = useState<IRegistration>(initialLoginFormData);
    
    const handleRegistrationFormSubmission = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(userRegistration(formData)).unwrap();
    }

    const navigateToLogin = () => {
        push("/login");
    }

    useEffect(() => {
        console.log("registered user is ", responseData);
        if (responseData) {
            set("auth-email", responseData.emailAddress as string, {
                expires: 60 * 9 // 9 minutes
            });
            push("/verify");
        }
    }, [responseData]);

    return {
        isLoading: isLoading,
        authUser: responseData,
        formData: formData,
        setFormData: setFormData,
        errorMessage: error,
        handleRegistrationFormSubmission: handleRegistrationFormSubmission,
        navigateToLogin: navigateToLogin
    }
}