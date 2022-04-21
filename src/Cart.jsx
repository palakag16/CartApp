import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuantity, removeQuantity,deleteQuantity } from "./cart/Cartslice";
import { removeFromcart } from "./cart/Productslice";
const Cart = () => {
  const Cartitems = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const addQuant = (id) => {
    dispatch(addQuantity(id));
  };

  const removeQuant = (id) => {
    dispatch(removeQuantity(id));
  };
  const deleteQuant = (id) => {
    dispatch(deleteQuantity(id));
    dispatch(removeFromcart(id));
  };

  const countTotal= Cartitems.reduce((acc,el)=>{
     return acc += el.quantity*el.price;
  },0)
  



  return (
    <>
      <div className="cart_wrapper">
        <div className="items_wrapper">
          {Cartitems.map((item) => {
            return (
              <div className="cart_item_one" key={item.id}>
                <img className="cartitemimg" src={item.img}></img>
                <div className="item_title"> {item.name}</div>
                <div className="price">&#8377;{item.price}</div>
                <div className="add_del_btns">
                  {item.quantity == 1 ? (
                    <div onClick={() => deleteQuant(item.id)}>del</div>
                  ) : (
                    <div
                      onClick={() => {
                        removeQuant(item.id);
                      }}
                    >
                      -
                    </div>
                  )}
                  <div>{item.quantity}</div>
                  <div
                    onClick={() => {
                      addQuant(item.id);
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            );
          })}
          <div className="subtotal_sect">
            <div className="item_title">subtotal</div>
            <div style={{ fontFamily: "sans-serif" }}> {countTotal}</div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Cart;
