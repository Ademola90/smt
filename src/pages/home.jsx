import React from "react";
import hero from "../assets/herof.jpg";
import Button from "../components/buttons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#FDFDFD] lg:pl-16 lg:pr-0 md:px-8 px-5 lg:flex md:grid grid justify-center lg:gap-0 md:gap-10 gap-10 items-center mt-16">
      <div className=" lg:w-1/2">
        <div>
          <p className=" text-dark text-6xl font-Inter font-bold ">
            Learn with expert anytime anywhere
          </p>
          <p className=" text-[#4E5566] text-xl font-Inter mt-5">
            Our mision is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </p>
          <div className=" mt-10">
            <div className=" lg:flex md:flex flex items-center gap-10 ">
              <Button
                css={"Soralight cursor-pointer text-main text-base"}
                text="Request Demo"
              />
              <Button
                onClick={() => navigate("/register")}
                text="START FOR FREE"
                css={
                  "Soralight bg-main cursor-pointer text-base text-[#fff] bg-[#05a3a4] px-4 py-2 rounded-md"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:w-1/2">
        <img className=" rounded-tl-3xl" src={hero} alt="" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
