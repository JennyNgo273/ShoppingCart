 
import React, { Component } from 'react'

//use connect library to get data from store 
import {connect} from 'react-redux';

class Cart extends Component {
    render() {
        console.log(this.props.gioHang)
        return (
            <div>

                <div>
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" style={{width:760}}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Cart</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body" style={{width:600}}>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Pay</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.gioHang.map((productCart,index)=>{
                                                return <tr key={index}>
                                                    <td>{productCart.maSP}</td>
                                                    <td><img src={productCart.hinhAnh} alt={productCart.hinhAnh} style={{width:100}}/></td>
                                                    <td>{productCart.tenSP}</td>
                                                    <td>{(productCart.gia).toLocaleString()}</td>
                                                    <td className="d-flex align-items-center">
                                                        <button className="btn btn-success mr-3" onClick={()=>{this.props.increaseOrDecrease(productCart.maSP,true)}}>+</button>
                                                        {productCart.soLuong.toLocaleString()}
                                                        <button className="btn btn-danger ml-3" onClick={()=>{this.props.increaseOrDecrease(productCart.maSP, false)}}>-</button>
                                                        </td>
                                                    <td>{(productCart.soLuong * productCart.gia).toLocaleString()}</td>
                                                    <td><button className="btn btn-danger" onClick={()=>{this.props.deleteCart(productCart.maSP)}}>Delete</button></td>
                                                </tr>
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <th colSpan={5}></th>
                                            <th>Total</th>
                                            <th>{this.props.gioHang.reduce((total,prodCart,index)=>{
                                                let pay = prodCart.soLuong * prodCart.gia;
                                                return total += pay;
                                            },0).toLocaleString()}</th>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

//Ham lay state redux bien doi thanh props cua component 
const mapStateToProps = (state) =>{ // state la state tong cua ung dung chuc cadc state con, ('rootReducer)
    return {
        gioHang: state.stateCart.cart
    }
}

//Reducer function
const mapDispatchToProps = (dispatch) =>{
    return {
        deleteCart : (maSP)=>{
            let action = {
                type: 'DELETE_CART',
                maSP  //gia tri gui di
            };
            //use dispatch function to send data to producer
            // console.log(maSP)
            dispatch(action);
        },
        increaseOrDecrease : (maSP,inde) =>{//inde=true=>process increase, inde=false=>process decrease
            let action = {
                type: 'INCREASE_DECREASE_QUANTITY',
                maSP,
                inde
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
