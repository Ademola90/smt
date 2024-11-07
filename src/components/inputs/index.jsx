import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { IoIosCheckmark } from "react-icons/io";

const Input = ({ css, placeholder }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className={`${css} mt-[2px]`}
        type="text"
      />
    </div>
  );
};

const PasswordInput = ({ css, placeholder, passwordinfo }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="relative items-center">
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder={placeholder}
          className={`${css} mt-[2px]`}
        />
        <div
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? (
            <BiHide size={24} className="text-black" />
          ) : (
            <BiShow size={24} className="text-gray-400" />
          )}
        </div>
      </div>
      <p className=" text-xs text-[#000] Soralight mt-2">{passwordinfo}</p>
    </div>
  );
};

const NewsletterCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center gap-2">
      <label className="relative flex items-center cursor-pointer justify-center ">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={`appearance-none relative h-4 w-4 rounded-sm cursor-pointer focus:outline-none grid justify-center items-center ${
            isChecked ? "bg-[#009a96]" : "bg-[#d9d9d9]"
          }`}
        />
        {isChecked && (
          <div>
            {/* <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
            ✔
          </span> */}
            <IoIosCheckmark
              size={24}
              className="absolute inset-0 top-[-4px] left-[-4px]  flex items-center justify-center text-white text-xs font-bold"
            />
          </div>
        )}
      </label>
      <p className="text-[#000] text-xs Soralight">Subscribe to Newsletter</p>
    </div>
  );
};

export { Input, PasswordInput, NewsletterCheckbox };
