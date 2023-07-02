import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const url = 'http://10.0.2.2:8083/ecom/'

//product
export const GetProduct = createAsyncThunk('ecom/get', async () => {
    try {
        const wholeData = await axios.get(`${url}/products`);
        return wholeData.data
    } catch (error) {
        console.log(error);
    }
})

//productId
export const GetProductById = createAsyncThunk('ecom/getId', async (id) => {
    try {
        // console.log(id);
        const wholeData = await axios.get(`${url}/product/${id}`);
        return wholeData.data
    } catch (error) {
        console.log(error);
    }
})

export const GetComments = createAsyncThunk('ecom/getComments', async (id) => {
    try {
        // console.log(id);
        const wholeData = await axios.get(`${url}/getcomment/${id}`);
        return wholeData.data.comments
    } catch (error) {
        console.log(error);
    }
})

//cart
export const AddCart = createAsyncThunk('cart/post', async (data) => {
    try {
        const newData = axios.post(`${url}/addcart`, data);
        return (await newData).data
    } catch (error) {
        console.log(error);
    }
})


export const GetCart = createAsyncThunk('cart/get', async () => {
    try {
        const cartData = await axios.get(`${url}/getcart`);
        return cartData.data;
    } catch (error) {
        console.log(error);
    }
})

export const DeleteCart = createAsyncThunk('cart/delete', async (id) => {
    try {
        await axios.delete(`${url}/deletecart/${id}`)
        return id
    } catch (error) {

    }
})
