import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IApiResponse } from "@/types/apiResponse";
import { initialState, defaultErrorMessage } from "@/utils/helper";
import { api } from "@/service/api";

export const fetchProducts = createAsyncThunk("/products", async (queryParams: string) => {
    const response = await api<IApiResponse>(`product?${queryParams}`, "GET");
    return response;
});

export const approveProduct = createAsyncThunk("/product/approve", async(productId: string) => {
    const response = await api<IApiResponse>(`product/approve/${productId}`, "PATCH");
    return response
});

export const rejectProduct = createAsyncThunk("/product/reject", async(productRejection: { id: string, rejectionReason: string}) => {
    const response = await api<IApiResponse>(`product/reject/${productRejection.id}`, "POST", {reason: productRejection.rejectionReason});
    return response
});

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
    }
});

export default productSlice.reducer;