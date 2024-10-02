import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store"
import { useRouter } from "next/navigation";
import { ILogin } from "@/types/login";
import { userLogin } from "@/redux/auth";
import { fetchUserProfile } from "@/redux/profile";

const initialLoginFormData: ILogin = {
    username: "",
    password: "",
}

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { push } = useRouter();
    
    const {
        isLoading: isAuthLoading,
        responseData: authResponseData,
        error: authError
    } = useSelector((state: RootState) => state.auth);
    
    const {
        isLoading: isProfileLoading,
        error: profileError
    } = useSelector((state: RootState) => state.profile);

    const [formData, setFormData] = useState<ILogin>(initialLoginFormData);
    
    const handleLoginFormSubmission = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(userLogin(formData)).unwrap();
    }

    const navigateToRegistration = () => {
        push("/register");
    }

    useEffect(() => {
        if (authResponseData?.accessToken) {
            const fetchProfile = async () => {
                try {
                    await dispatch(fetchUserProfile()).unwrap();
                    push("/dashboard");
                } catch (error) {
                    console.error('Failed to fetch profile:', error);
                }
            };
            fetchProfile();
        }
    }, [authResponseData, dispatch, push]);

    return {
        isLoading: isAuthLoading || isProfileLoading,
        formData: formData,
        setFormData: setFormData,
        errorMessage: authError || profileError,
        handleLoginFormSubmission: handleLoginFormSubmission,
        navigateToRegistration: navigateToRegistration
    }
}