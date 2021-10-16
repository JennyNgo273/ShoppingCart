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
                            <div className="modal-content" style={{width:700}}>
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
                                                    <td>{productCart.soLuong.toLocaleString()}</td>
                                                    <td>{(productCart.soLuong * productCart.gia).toLocaleString()}</td>
                                                    <td></td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
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
const mapStateToProps = state =>{ // state la state tong cua ung dung chuc cac state con, ('rootReducer)
    return {
        gioHang: state.stateCart.cart
    }
}
export default connect(mapStateToProps)(Cart)