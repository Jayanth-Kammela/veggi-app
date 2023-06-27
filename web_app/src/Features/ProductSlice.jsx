import { createSlice } from "@reduxjs/toolkit"
import { GetProduct, GetProductById } from "../Services/Services"

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers(builder) {

    builder.addCase(GetProduct.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(GetProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }),
      builder.addCase(GetProduct.rejected, (state, action) => {
        state.loading = true;
      }),

      builder.addCase(GetProductById.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(GetProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }),
      builder.addCase(GetProductById.rejected, (state, action) => {
        state.loading = true;
      })
  }
})

export default ProductSlice.reducer