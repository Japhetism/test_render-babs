import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/service/api';
import { defaultErrorMessage } from '@/utils/helper';

interface IImageApiResponse {
    url: string
    id: string
}

interface IImageState {
    entities: Record<string, { url: string | null; isLoading: boolean; error: string | null }>;
}
  
const initialState: IImageState = {
    entities: {},
};

export const fetchImage = createAsyncThunk("/image", async (name: string) => {
    console.log("file name is ", name);
    const response = await api<IImageApiResponse>(`file/get/${name}`, "GET");
    return { id: name, url: response.data };
});


export const imageSlice = createSlice({
    name: "images",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchImage.pending, (state, action) => {
            const imageId = action.meta.arg;
            state.entities[imageId] = { url: null, isLoading: true, error: null };
        })
        .addCase(fetchImage.fulfilled, (state, action) => {
            const { id, url } = action.payload;
            state.entities[id] = { url, isLoading: false, error: null };
        })
        .addCase(fetchImage.rejected, (state, action) => {
            const imageId = action.meta.arg;
            state.entities[imageId] = { url: null, isLoading: false, error: action.error.message || defaultErrorMessage };
        })
    }
});

export const selectImage = (imageId: string) => (state: { images: IImageState }) => state.images.entities[imageId];
export default imageSlice.reducer;