import React, { useState } from "react";
import { observer } from "mobx-react";
import codeStore from "../CodeStore";
import CodeItem from "./CodeItem";

const Draggable = ({ index, name, code, timeRemaining }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggedOver, setIsDraggedOver] = useState(); // Track hovered item
  console.log("render");
  function handleDragStart(e) {
    setIsDragging(true);
    e.dataTransfer.setData("text/plain", index);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  function handleDragOver(e, index) {
    e.preventDefault();
    setIsDraggedOver(index);
  }

  function handleDrop(e) {
    e.preventDefault();
    const droppedItemIndex = e.dataTransfer.getData("text/plain");
    if (index !== droppedItemIndex) {
      codeStore.reorderCodes(droppedItemIndex, index);
    }
  }
  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={e => handleDragOver(e, index)}
      onDragLeave={e => handleDragOver(e, null)}
      onDrop={handleDrop}
      className={`code-item p-4 my-4 border rounded-md shadow-md flex justify-between items-center cursor-grab ${
        isDragging ? "dragging" : ""
      }`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        boxShadow: isDragging ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
        transform: isDragging ? "scale(1.05)" : "scale(1)",
        transition: "opacity 0.2s, box-shadow 0.2s, transform 0.2s",
        background: isDraggedOver === index ? "#f0f0f0" : "white",
      }}
    >
      <CodeItem name={name} code={code} timeRemaining={timeRemaining} />
    </div>
  );
};

export default observer(Draggable);
