import React from "react";
import { observer } from "mobx-react";
import codeStore from "../CodeStore";
import Draggable from "./Draggable";

const CodeList = () => {
  const codes = codeStore.codes;
  return (
    <>
      {codes.map((code, index) => (
        <Draggable
          key={String(code.code)}
          name={code.name}
          code={code.code}
          timeRemaining={code.timeRemaining}
          index={index}
        />
      ))}
    </>
  );
};

export default observer(CodeList);
