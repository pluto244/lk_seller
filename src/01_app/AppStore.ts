import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '@/05_entitties/product';
import { api } from '@/06_shared/api/api';

const store = configureStore({
  reducer: {
    product: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
