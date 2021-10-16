
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
            //update state again
            state.cart = [...state.cart];
            return {...state};
        };break;
        case 'DELETE_CART' :{
            let updateCart = [...state.cart]

            //find delete index based on maSP
            let index = updateCart.findIndex(spGH=>spGH.maSP === action.maSP)

            if(index !== -1){
                updateCart.splice(index,1);
            }
            //update state again
            state.cart = updateCart;
            return{...state};
        };break;
        case 'INCREASE_DECREASE_QUANTITY' :{
            let updateCart = [...state.cart]

            let index = updateCart.findIndex(spGH=>spGH.maSP === action.maSP)

            if(index !== -1){

                if(action.inde){
                    updateCart[index].soLuong +=1
                }else{
                    if(updateCart[index].soLuong >= 1){
                        updateCart[index].soLuong -=1
                    }else{
                        alert('The quantity have be at least 1')
                    }
                }
                
            }
            state.cart = updateCart;
            return{...state};

        };break;
        default: return state;
    }
}

export default CartExReducer;