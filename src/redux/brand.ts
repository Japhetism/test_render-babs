import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/service/api";
import { IApiResponse } from "@/types/apiResponse";
import { initialState, defaultErrorMessage } from "@/utils/helper";

export const fetchBrands = createAsyncThunk("/brands", async () => {
    const response = await api<IApiResponse>("product/brand", "GET");
    return response;
});

export const brandSlice = createSlice({
    name: "brand",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(fetchBrands.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
    }
});

export default brandSlice.reducer;