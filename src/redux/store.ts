import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from "./auth";
import profileReducer from "./profile";
import vendorReducer from "./vendor";
import imageReducer from "./image";
import productCategoryReducer from "./productCategory";
import productReducer from "./product";
import brandReducer from "./brand";
import orderReducer from "./order";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['profile']
};

const persistedProfileReducer = persistReducer(persistConfig, profileReducer);

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: persistedProfileReducer,
        vendor: vendorReducer,
        images: imageReducer,
        productCategory: productCategoryReducer,
        product: productReducer,
        brand: brandReducer,
        order: orderReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
          },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);