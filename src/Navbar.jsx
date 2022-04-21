import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const navigate = useNavigate();
  const Cartitems = useSelector((store) => store.cart);

//   let students = [
//     { name: "piyush", rollNumber: 32, marks: 80 },

//     { name: "jenny", rollNumber: 15, marks: 69 },

//     { name: "kaushal", rollNumber: 16, marks: 35 },

//     { name: "Dilpreet", rollNumber: 7, marks: 55 },
//   ];
//   const stu = students
//     .map((student) => student.marks)
//     .map((mark) => (mark > 60 ? mark : mark + 20))
//     .filter((mark) => mark >= 60)
//     .reduce((acc, el) => (acc += el), 0);

//   console.log(stu, "Student");

  return (
    <div>
      <h1 className="heading">Checkout with your items</h1>
      <div className="item_in_cart" onClick={()=>navigate('/cart')}>{ Cartitems.length||0} Total items</div>
  
    </div>
  );
};

export default Navbar;
