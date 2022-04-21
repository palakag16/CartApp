import  {createSlice} from '@reduxjs/toolkit';

const Cartslice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
      addItem: (state,action)=>{
         return [...state,action.payload]
      },
      addQuantity:(state,action)=>{
        return state.map((el)=>{
           if(el.id==action.payload){
               return{...el,quantity:el.quantity+1}
           }
           return el;
         })
      },
      removeQuantity:(state,action)=>{
        return state.map((el)=>{
           if(el.id==action.payload){
               return{...el,quantity:el.quantity-1}
           }
           return el;
         })
      },
      deleteQuantity:(state,action)=>{
        return state.filter((el)=>{
           return el.id!==action.payload;
         })
      }
    }
})



export const{addItem,addQuantity,removeQuantity,deleteQuantity} = Cartslice.actions;
export default Cartslice.reducer;