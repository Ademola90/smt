import React from "react";
import { GiPlayButton } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ onClick, text, css }) => {
  return (
    <div>
      <button onClick={onClick} className={` ${css} `}>
        {text}
      </button>
    </div>
  );
};

export const SecButton = ({ text, css }) => {
  return (
    <div className=" flex items-center gap-2">
      <GiPlayButton className=" text-main " size={24} />
      <button className={`${css}`}>{text}</button>
    </div>
  );
};

export const LearnMore = ({ text, img }) => {
  return (
    <div>
      <div className=" flex items-center gap-2">
        <p className=" text-white font-Roboto text-base font-semibold">
          {text}
        </p>
        <FaArrowRight className=" text-white" size={16} />
      </div>
    </div>
  );
};

export default Button;
