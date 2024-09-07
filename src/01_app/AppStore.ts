import { productReducer } from '@/05_entitties/product';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        product: productReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;