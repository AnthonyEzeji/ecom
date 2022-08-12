import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems:[], amount:0, total:0,isLoading:true
}
const cartSlice = createSlice({
    name:'cart', 
    initialState,
    reducers:{
        addItem:(state,action)=>{
            var bool = true
        if(state.cartItems.length==0){
            var quantity = 1
            state.cartItems.push({...action.payload, quantity:quantity })
            state.amount=state.amount+quantity
            state.total = state.total + action.payload.price
      console.log(state.total)
        }else{
            state.cartItems.forEach(item=>{
                if(item._id===action.payload._id){
                   state.amount++
                    item.quantity++
                    state.total=state.total+item.price
                 
                    console.log(item)
                    console.log(state.cartItems)
                    console.log(state.total)
                    console.log(state.amount)
                    bool = false
                }
            })
            if(bool){
                var quantity = 1
                state.cartItems.push({...action.payload, quantity:quantity })
                state.amount=state.amount+quantity
                state.total = state.total + action.payload.price
          console.log(state.total)
            }
        }
           
        
        
        
           
        },
       
        increase:(state,action)=>{
            state.cartItems.forEach(item=>{
                if(item._id===action.payload._id){
                   state.amount++
                    item.quantity++
                    state.total=state.total+item.price
                 
                  
                }
            })
        },
        decrease:(state,action)=>{
            if(action.payload.quantity<2){
             return
            }else{
                state.cartItems.forEach(item=>{
                    if(item._id===action.payload._id){
                       state.amount--
                        item.quantity--
                        state.total=state.total-item.price
                     
                   
                      
                    }
                })
            }
           
        },
        removeItem:(state,action)=>{
          state.cartItems = state.cartItems.filter(item=>{
            return item._id!==action.payload._id
          })
          var total= 0
          var amount = 0
          state.cartItems.forEach(item=>{
            total = total + item.price*item.quantity
            amount = amount + item.quantity
          })
          state.total = total 
          state.amount = amount
          
        }
    }

})

export const {addItem,increase,decrease,removeItem} = cartSlice.actions
export default cartSlice.reducer