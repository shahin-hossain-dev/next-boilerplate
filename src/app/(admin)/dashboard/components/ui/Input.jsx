import React from "react";
import { Input as AntInput } from "antd";

const Input = ({ label, placeholder, onChange, ...props }) => {
  return (
    <div className="mb-4">
      <div className="mb-2.5">
        <label className=" font-semibold mb-2 ">{label}</label>
      </div>
      <AntInput
        onChange={onChange}
        {...props}
        placeholder={placeholder}
        className="!text-base"
      />
    </div>
  );
};

export default Input;
