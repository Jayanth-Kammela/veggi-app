import { createSlice } from "@reduxjs/toolkit"
import { GetProduct, GetProductById, GetComments, AddCart, GetCart, DeleteCart } from "../Services/Services"

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    comments: [],
    cart: [],
    loading: false,
  },
  extraReducers(builder) {

    //product
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

    //comments
    builder.addCase(GetComments.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(GetComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      }),
      builder.addCase(GetComments.rejected, (state, action) => {
        state.loading = true;
      })

    //cart
    builder.addCase(AddCart.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(AddCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart.push(action.payload);
      })
    builder.addCase(AddCart.rejected, (state, action) => {
      state.loading = true;
    })

    builder.addCase(GetCart.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(GetCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      }),
      builder.addCase(GetCart.rejected, (state, action) => {
        state.loading = true;
      })


    builder.addCase(DeleteCart.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(DeleteCart.fulfilled, (state, action) => {
        state.loading = false;
      }),
      builder.addCase(DeleteCart.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default ProductSlice.reducer