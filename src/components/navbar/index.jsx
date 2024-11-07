import React, { useEffect, useState } from "react";
import pagelogo from "../../assets/LOGO.png";
import Button from "../buttons";
import { GiHamburgerMenu } from "react-icons/gi";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
// import Aos from "aos";

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" bg-white py-4 flex items-center justify-between lg:px-16 md:px-8 px-5">
      <div>
        <img className="  w-36 h-10" src={pagelogo} alt="" />
      </div>
      <ul className=" lg:flex md:flex hidden items-center gap-10 ">
        <li className=" Soralight cursor-pointer text-[#000] text-base">
          Solutions
        </li>
        <li className=" Soralight cursor-pointer text-[#000] text-base">
          Company
        </li>
        <li className=" Soralight cursor-pointer text-[#000] text-base">
          Pricing
        </li>
        <li className=" Soralight cursor-pointer text-[#000] text-base">
          FAQs
        </li>
      </ul>
      <div className=" lg:flex md:flex hidden items-center gap-10 ">
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
      <GiHamburgerMenu
        onClick={() => setToggle(!toggle)}
        size={24}
        className=" cursor-pointer lg:hidden md:hidden block"
      />

      {toggle && (
        <div
          data-aos="fade-right"
          className="  bg-white w-full h-screen z-40 fixed  top-16 right-0 items-center"
        >
          <ul className=" lg:hidden md:hidden grid mt-16 items-center gap-10 justify-center ">
            <li className=" Soralight text-center cursor-pointer text-[#000] text-base">
              Solutions
            </li>
            <li className=" Soralight text-center cursor-pointer text-[#000] text-base">
              Company
            </li>
            <li className=" Soralight text-center cursor-pointer text-[#000] text-base">
              Pricing
            </li>
            <li className=" Soralight text-center cursor-pointer text-[#000] text-base">
              FAQs
            </li>
          </ul>

          <div className=" lg:flex md:flex grid justify-center mt-10 items-center gap-10 ">
            <div className=" flex justify-center items-center gap-5">
              {" "}
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
      )}
    </div>
  );
};

export default Navbar;
