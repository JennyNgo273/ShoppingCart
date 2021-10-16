import {combineReducers} from 'redux';
import CartExReducer from './CartReducer';

const rootReducer = combineReducers({ //store tong cua ung dung
    stateCart: CartExReducer //state cart
    
    
})

export default rootReducer;

// 8K (gzipped: 2.9K)