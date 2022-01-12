import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addcart,deletecart } from "./../redux/actions/index";
import handlecart from "./../redux/reducer/handlecart";
export default function Cart() {
  const state = useSelector((state) => state.handlecart);
    const dispatch= useDispatch()
  const handleClose = (item) => {
      dispatch(deletecart(item))
  }
  const empatyCart = () =>{
    return (
        <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
            <h3>Your Cart is Empty</h3>
            </div>
        </div>
    )
}

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close" onClick={()=> handleClose(cartItem)}></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt=""
                width={"180px"}
                height={"200px"}
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="load fw-bold">$ {cartItem.price}</p>
              <p className="load">{cartItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (<>
  {state.length === 0  && empatyCart()}
  {state.length !== 0 && state.map(cartItems)}
  </>);
}
