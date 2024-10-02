import { IInitialState } from "@/types/apiResponse";
import { AdminProfile } from "@/types/profile";

interface IStage {
    label: string
    isActive: boolean
};

export const initialState: IInitialState = {
    responseData: null,
    status: "idle",
    error: null,
    isLoading: false,
}

export const generateStages = (length: number, activeCount: number): IStage[] => {
    const stages: IStage[] = [];
    
    for (let i = 0; i < length; i++) {
        const index = i + 1;
        stages.push({
            label: `Stage ${index}`,
            isActive: i < activeCount+1
        });
    }
    
    return stages;
}

export const defaultErrorMessage = "An unknown error occurred";

export const initialAuthUser: AdminProfile = {
    profileUrl: "",
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    postCode: "",
    state: "",
    country: "",
    geolocation: {
      longitude: 10,
      latitude: 20,
      _id: "",
    },
};

export const initialProductCategoryFormData = {
    name: "",
    description: "",
    markupType: "",
    markupValue: "",
}