import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CodeItem from "./CodeItem";
import { observer } from "mobx-react";
import codeStore from "../CodeStore";
import CodeList from "./CodeList";

const Droppables = ({ onDragEnded }) => {
  const codes = codeStore.codes;
  // console.log(codes[0]);
  return (
    <DragDropContext onDragEnd={onDragEnded}>
      <Droppable droppableId='code-list'>
        {provided => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='code-list mt-8 space-y-4'
          >
            <CodeList />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Droppables;
