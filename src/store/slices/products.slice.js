import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  //el reducers sera un action, (acciones)
  reducers: {
    // creamos un seteador
    setProductsG: (state, action) => action.payload
  }
})
 //LUEGO DESESTRUCTURAMOS LAS ACTIONS
export const {setProductsG} = productsSlice.actions

export default productsSlice.reducer
//luego hacemos una peticion asincrotica y guardamos en un estado global creamos un thunk

export const getAllProductsThunk = () => dispatch => {
    //creamos un despachador este siempre es para acciones o thunk
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    axios.get(url)
    .then(res => dispatch(setProductsG(res.data)))//se despacha la accion
    .catch(err => console.log(err))
}