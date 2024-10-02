import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IApiResponse } from "@/types/apiResponse";
import { initialState, defaultErrorMessage, initialAuthUser } from "@/utils/helper";
import { api } from "@/service/api";

const profileInitialState = {
    ...initialState,
    profile: initialAuthUser 
}

export const fetchUserProfile = createAsyncThunk("/profile", async () => {
    const response = await api<IApiResponse>("profile", "GET");
    return response;
});

export const profileSlice = createSlice({
    name: "profile",
    initialState: profileInitialState,
    reducers: {
        clearProfile: (state) => {
            state.profile = initialAuthUser
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserProfile.pending, (state) => {
            state.status = "pending";
            state.isLoading = true;
            state.error = null;
            state.profile = initialAuthUser;
            state.responseData = undefined;
        })
        .addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.status = "success";
            state.isLoading = false;
            state.profile = action.payload.data;
            state.responseData = action.payload.data;
        })
        .addCase(fetchUserProfile.rejected, (state, action) => {
            state.status = "error";
            state.isLoading = false;
            state.profile = initialAuthUser;
            state.responseData = undefined;
            const errorPayload = action?.error as IApiResponse;
            state.error = errorPayload?.message || defaultErrorMessage;
        })
    }
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
