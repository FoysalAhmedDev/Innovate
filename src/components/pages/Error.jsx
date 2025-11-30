import React from "react";
import Image from "../Image";
import E404 from "../../assets/E404.jpg";

const Error = () => {
  return <Image className={`w-full h-screen`} imgSrc={E404} />;
};

export default Error;
