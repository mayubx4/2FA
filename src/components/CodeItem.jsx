import React, { useState, useEffect } from "react";
import CircularProgressBar from "./CircularProgressBar";
import CodeStore from "../CodeStore";
import icon from '../assets/react.svg'

const CodeItem = ({ index, name, code, timeRemaining }) => {
  // const [remainingTime, setRemainingTime] = useState(timeRemaining);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (remainingTime > 0) setRemainingTime(remainingTime - 1);
  //     else CodeStore.resetCode(index);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [remainingTime]);

  return (
    <>
    <img src={icon}/>
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

export default CodeItem;
