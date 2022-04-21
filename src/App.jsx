// import React, { useState } from "react";
// import {FaHeart,FaHeartBroken} from "react-icons/fa";
// const App = () => {
//   const data = [
//     { id: 1, name: "Rachel", active: false },
//     { id: 2, name: "Ross", active: false },
//     { id: 3, name: "Phoebe", active: false },
//     { id: 4, name: "Mike", active: false },
//   ];

//   const [datas, setData] = useState(data);

//   const toggleActive = (id) => {
//     const updateddate = datas.map((el) => {
//       if (el.id == id) {
//         return { ...el, active: !el.active };
//       }
//       return el;
//     });
//     setData(updateddate);
//   };

//   return (
//     <>
//       <h1>social media app</h1>
//       {datas.map((el) => {
//         return (
//           <div key={el?.id}>
//             <h1>{el?.name}</h1>
//             <div
//               style={{ padding: "1rem", background: "red", color: "white" }}
//               onClick={() => toggleActive(el.id)}
//             >
//               {el?.active ? <FaHeart/> :<FaHeartBroken/> }
//             </div>
//             <div style={{ border: "1px solid black" }}></div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import { Provider } from "react-redux";
import store from "./cart/store";
import Navbar from "./Navbar";

const App = () => {
  // const [keyss, setState] = useState({
  //   a: false,
  //   b: false,
  //   c: false,
  //   d: false,
  // });
  // const getobj = () => {
  //   var objkeys = Object.keys({ a: 989, b: 9090 });
  //  const arrtoobj=objkeys.reduce((a, v) => ({ ...a, [v]: true}), {})
  //  setState({...keyss,...arrtoobj});
  // };

  // useEffect(() => {
  //   getobj();
  // }, []);
  // console.log(keyss, "state");
  return (
    <>
      <h1>app</h1>
      {/* <Provider store={store}>
     <Navbar/>
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
   </Provider> */}
    </>
  );
};

export default App;
