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
