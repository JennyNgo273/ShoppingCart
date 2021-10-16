
// setup state cart in store

const stateCart = {
    cart:[]
}


const CartExReducer = (state = stateCart,action) =>{

    // eslint-disable-next-line default-case
    switch(action.type){
        case 'ADD_TO_CART':{
            let index = state.cart.findIndex(spGH => spGH.maSP === action.cartProduct.maSP);

            if(index !== -1){
                state.cart[index].soLuong+=1
            }else{
                state.cart.push(action.cartProduct)
            }

            //SetState
            state.cart = [...state.cart];
            return {...state};
        }
    }
    return state
}

export default CartExReducer;