// src/entities/product/model/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



type Product = {

}

interface ProductState {
    items: Array<Product>;
}

const initialState: ProductState = {
    items: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Array<Product>>) => {
            state.items = action.payload;
        }
    }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
