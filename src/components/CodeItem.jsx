import React from "react";
import { observer } from "mobx-react";
import CircularProgressBar from "./CircularProgressBar";
import icon from "../assets/react.svg";

const CodeItem = ({  name, code, timeRemaining }) => {
  return (
    <>
      <img src={icon} alt='React Icon' />
      <div className='mr-4'>
        <div className='text-base font-medium'>{name}</div>
        <div className='text-gray-600'>
          {code.toString().slice(0, 3)} {code.toString().slice(3, 6)}
        </div>
      </div>
      <CircularProgressBar
        sec={timeRemaining}
        progress={(timeRemaining / 60) * 100}
      />
    </>
  );
};

export default observer(CodeItem);
