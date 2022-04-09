import React from "react";
import Img from "../Images/public.jpg";
const Public = ({ text }) => {
  return (
    <div className="flex">
      <p className="center">{text}</p>
      <img src={Img} alt="" width="400px" />
    </div>
  );
};

export default Public;
