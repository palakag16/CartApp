import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./cart/Cartslice";
// import { Order } from "./Order";
import { addTocart } from "./cart/Productslice";
const Home = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState(Order);
  const cItems = useSelector((store) => store.cart);
  const data = useSelector((store)=>store.products)
  const[cardids,setIds] = useState(cItems.map((el)=>el.id));


 
  const addItemtoCart = (item) => {
   
    // setData(
    //   data.map((el) => {
    //     if (el.id == item.id) {
    //       return { ...el, add: "Added" };
    //     }
    //     return el;
    //   })
    // );
    dispatch(addTocart(item.id))
    const filtered = cardids.concat(item.id);
    setIds([...new Set(filtered)]);
   if(cardids.includes(item.id)){
     return null;
   }
   else{
    dispatch(addItem(item));
   }
  };
  return (
    <>
      <div className="grid_wrapper">
        {data.map((item) => {
          return (
            <div className="grid_item_1" key={item.id}>
              <img className="img_style" src={item.img}></img>
              <h4 className="item_title">{item.name}</h4>
              <p className="item_desc">{item.desciption}</p>
              <p className="item_desc"> price- {item.price}</p>
              <div className="add_btn" onClick={() => addItemtoCart(item)}>
                {item.add}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
