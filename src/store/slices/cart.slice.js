//cart.slice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    //creamos una action para cambiar o modificar un estado global
    //con state representamos el valor actual del estado y con action el valor que se envia como parametro
    setCartG: (state, action) => action.payload,
    //ahora para agregarle algo al carro
    addCartG: (state, action) => [...state, action.payload],
    //para borrar en el carro
    deleteCartG: (state, action) =>
      state.filter((prod) => prod.id !== action.payload),
    //crear el update
    updateCartG: (state, action) => {
      const updatedIndex = state.findIndex(
        (prod) => prod.id === action.payload.id
      );
      if (updatedIndex !== -1) {
        state[updatedIndex] = action.payload;
      }
    },
  },
});

export const { setCartG, addCartG, deleteCartG, updateCartG } =
  cartSlice.actions;

export default cartSlice.reducer;

//siempre que queremos guardar una peticion asincronica creamos un thunk

export const getCartThunk = () => dispatch => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";
  axios
    //ahora si es un protected endpoint realizar un token y llamarlo si ya esta creado getConfigToken:
    .get(url, getConfigToken())
    .then((res) => dispatch(setCartG(res.data)))
    .catch((err) => console.log(err));
};
