import React, { Component } from 'react'
import Cart from './Cart'
import ProductlistRedux from './ProductlistRedux'

//use connect library to get data from store 
import {connect} from 'react-redux';

class CartRedux extends Component {


    renderQuanity = () => {
        return this.props.gioHang.reduce((quantityTotal,productCart,index)=>{
            return quantityTotal += productCart.soLuong;
        },0);
    }
    
    render() {
        return (
            <div className="container">
                <h3>Product List</h3>
                <div className="text-right">
                    <span style={{width:17, cursor:'pointer'}}  data-toggle="modal" data-target="#modelId" >
                        <i className="fa fa-shopping-cart"></i>({this.renderQuanity()})Cart
                    </span>
                </div>
                <ProductlistRedux/>
                <Cart/>
            </div>
        )
    }
}
//function get value from redux store convert to props component
const mapStateToProps = (state) =>{
    return{
        gioHang: state.stateCart.Cart
    }
}

export default connect(mapStateToProps)(CartRedux)
