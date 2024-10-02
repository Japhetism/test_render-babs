import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { AdminProfile } from "@/types/profile";
import { initialAuthUser } from "@/utils/helper";

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { push } = useRouter();
    
    const [user, setUser] = useState<AdminProfile>(initialAuthUser);
   
    const { error, profile } = useSelector((state: RootState) => state.profile);

    useEffect(() => {
        if (profile?.fullName) {
            setUser(profile);
        } else {
           push("/login");
        }
    }, [profile]);

    return {
        errorMessage: error,
        user: user,
    };
};
