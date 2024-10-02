import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { ILogin, IOtp } from "@/types/login";
import { IApiResponse } from "@/types/apiResponse";
import { initialState, defaultErrorMessage } from "@/utils/helper";
import { api } from "@/service/api";

export const userLogin = createAsyncThunk("/login", async (user: ILogin) => {
    const response = await api<IApiResponse>("user/login", "POST", user);
    return response;
});

export const userRegistration = createAsyncThunk("/signup", async (user: ILogin) => {
    const response = await api<IApiResponse>("user/signup", "POST", user);
    return response;
});

export const otpValidation = createAsyncThunk("/otp/validate", async (otpFormData: IOtp) => {
    const response = await api<IApiResponse>("user/otp/validate", "POST", otpFormData);
    return response;
});

export const forgotPassword = createAsyncThunk("/forgot/password", async (email: string) => {
    const response = await api<IApiResponse>("user/forgot/password", "POST", {email});
    return response;
});

export const resetPassword = createAsyncThunk("/reset/password", async (resetFormData: any) => {
    const response = await api<IApiResponse>("user/reset/password", "POST", resetFormData);
    return response;
});

export const authSlice = createSlice ({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            state.responseData = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.error = null;
                state.responseData = undefined;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                Cookies.set("accessToken", action.payload.data.accessToken, { expires: 60 * 60 });
                Cookies.set("refreshToken", action.payload.data.refreshToken, { expires: 60 * 60 });
                state.responseData = action.payload.data;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
            .addCase(userRegistration.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(userRegistration.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(userRegistration.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
            .addCase(otpValidation.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(otpValidation.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(otpValidation.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
            .addCase(resetPassword.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })       
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;

