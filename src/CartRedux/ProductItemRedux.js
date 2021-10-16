import React, { Component } from 'react'

//use connect library to get data from store 
import {connect} from 'react-redux';

 class ProductItemRedux extends Component {

    

render() {
    let { products } = this.props;
    return (
        <div>
            <div className="card text-dark ">
                <img style={{width:290, marginLeft:27}} className="card-img-top" src={products.hinhAnh} alt={products.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{products.tenSP}</h4>
                    <p className="card-text">{products.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{this.props.addToCart(products)}}>Add to cart</button>
                </div>
            </div>

        </div>
    )
}
}
//Ham gui du lieu len store
const mapDispatchToProps =(dispatch)=>{
    return {
        addToCart: (product)=>{
            //crate product in cart
            let cartProduct = {
                maSP:product.maSP, 
                tenSP:product.tenSP, 
                hinhAnh:product.hinhAnh,
                soLuong:1,
                gia:product.giaBan}

            // console.log(cartProduct)

            //create action
            let action = {
                type: 'ADD_TO_CART',//attribute of action
                cartProduct
            };

            //use dispatch function to send data to reducer
            dispatch(action);
        }
    } 
}

export default connect(null, mapDispatchToProps)(ProductItemRedux)