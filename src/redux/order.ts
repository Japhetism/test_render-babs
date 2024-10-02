import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/service/api";
import { IApiResponse } from "@/types/apiResponse";
import { initialState, defaultErrorMessage } from "@/utils/helper";

export const fetchOrders = createAsyncThunk("/orders", async () => {
    const response = await api<IApiResponse>("order/active", "GET");
    return response;
});

export const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
    }
});

export default orderSlice.reducer;