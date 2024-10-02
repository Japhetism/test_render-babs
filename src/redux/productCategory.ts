import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IApiResponse } from "@/types/apiResponse";
import { initialState, defaultErrorMessage } from "@/utils/helper";
import { api } from "@/service/api";

export const fetchProductCategories = createAsyncThunk("/product/categories", async () => {
    const response = await api<IApiResponse>("product/category", "GET");
    return response;
});

export const fetchProductCategoryById = createAsyncThunk("/product/categories/id", async (categoryId: string) => {
    const response = await api<IApiResponse>(`product/category/${categoryId}`, "GET");
    return response;
});

export const addProductCategory = createAsyncThunk("/product/categories/create", async (productCategory: any) => {
    const response = await api<IApiResponse>("product/category", "POST", productCategory);
    return response;
});

export const updateProductCategory = createAsyncThunk("/product/categories/create", async (productCategory: any) => {
    const response = await api<IApiResponse>(`product/category/${productCategory?._id}`, "PATCH", productCategory);
    return response;
});

export const deleteProductCategory = createAsyncThunk("/product/categories/delete", async (categoryId: string) => {
    const response = await api<IApiResponse>(`product/category/${categoryId}`, "DELETE");
    return response;
});



export const productCategorySlice = createSlice({
    name: "productCategory",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductCategories.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(fetchProductCategories.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(fetchProductCategories.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
            .addCase(addProductCategory.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(addProductCategory.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(addProductCategory.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
            .addCase(fetchProductCategoryById.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.responseData = undefined;
            })
            .addCase(fetchProductCategoryById.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload.data;
            })
            .addCase(fetchProductCategoryById.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })
    }
});

export default productCategorySlice.reducer;