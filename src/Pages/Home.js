import React from "react";
import Img from "../Images/Protected.jpg";
import Img2 from "../Images/Home.jpg";
const Home = ({ text }) => {
  return (
    <div className="flex">
      <p className="center">{text}</p>
      <img src={Img} alt="" width="400px" />
      <img src={Img2} alt="" width="400px" />
    </div>
  );
};

export default Home;
