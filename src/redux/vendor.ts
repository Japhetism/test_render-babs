import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/service/api";
import { IApiResponse } from "@/types/apiResponse";
import { IInitialState } from "@/types/apiResponse";
import { initialState, defaultErrorMessage } from "@/utils/helper";

interface VendorState extends IInitialState {
    redirect: boolean;
}

const vendorInitialState: VendorState = {
    ...initialState,
    redirect: false
}

export const fetchVendors = createAsyncThunk("/vendors", async () => {
    const response = await api<IApiResponse>("vendor", "GET");
    return response;
});

export const addVendor = createAsyncThunk("/vendors/add", async (vendor: any) => {
    const headers = {
        "Content-Type": "multipart/form-data"
    }
    const response = await api<IApiResponse>("vendor", "POST", vendor, headers);
    return response;
});

export const updateVendor = createAsyncThunk("/vendors/update", async (vendor: any) => {
    const headers = {
        "Content-Type": "multipart/form-data"
    }
    const response = await api<IApiResponse>(`vendor/${vendor?._id}`, "PUT", vendor, headers);
    return response;
});

export const fetchVendorProducts = createAsyncThunk("/vendor/products", async (vendorId: string) => {
    const response = await api<IApiResponse>(`vendor/products/${vendorId}`, "GET");
    return response;
});

export const vendorSlice = createSlice({
    name: "vendor",
    initialState: vendorInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVendors.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(fetchVendors.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(fetchVendors.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
            .addCase(addVendor.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(addVendor.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.redirect = true;
                state.responseData = action.payload.data;
            })
            .addCase(addVendor.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
            .addCase(updateVendor.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(updateVendor.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.redirect = true;
                state.responseData = action.payload.data;
            })
            .addCase(updateVendor.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
    }
});

export default vendorSlice.reducer;