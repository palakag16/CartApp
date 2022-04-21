import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './Cartslice';
import Productslice from "./Productslice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        products:Productslice
    },
    devTools: false,
})

export default store;