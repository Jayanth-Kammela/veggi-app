import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const url = 'http://10.0.2.2:8083/ecom/'

//product
export const GetProduct = createAsyncThunk('ecom/get', async () => {
    const wholeData = await axios.get(`${url}/products`);
    return wholeData.data
})

//productId
export const GetProductById = createAsyncThunk('ecom/getId', async (id) => {
    const wholeData = await axios.get(`${url}/product/${id}`);
    return wholeData.data
})

export const GetComments = createAsyncThunk('ecom/getComments', async (id) => {
    const wholeData = await axios.get(`${url}/getcomment/${id}`);
    return wholeData.data.comments
})

//cart
export const AddCart = createAsyncThunk('cart/post', async (data) => {
    const newData = axios.post(`${url}/addcart`, data);
    return (await newData).data

})


export const GetCart = createAsyncThunk('cart/get', async () => {
    const cartData = await axios.get(`${url}/getcart`);
    return cartData.data;
})

export const DeleteCart = createAsyncThunk('cart/delete', async (id) => {
    await axios.delete(`${url}/deletecart/${id}`)
    return id

})

//comment
export const AddComment = createAsyncThunk('cart/post', async (data) => {
    const newData = axios.post(`${url}/postcomment`, data);
    return (await newData).data

})