import  {createSlice} from '@reduxjs/toolkit';
import { Order } from '../Order';

const Productslice = createSlice({
    name:"products",
    initialState:Order,
    reducers:{
       addTocart:(state,action)=>{
            return state.map((item)=>{
                if(item.id==action.payload){
                    return{...item,add:"Added"}
                }
                return item;
            })
       },
       removeFromcart:(state,action)=>{
        return state.map((item)=>{
            if(item.id==action.payload){
                return{...item,add:"+Add"}
            }
            return item;
        })
       }
    }
})

export const{addTocart,removeFromcart} = Productslice.actions;
export default Productslice.reducer;