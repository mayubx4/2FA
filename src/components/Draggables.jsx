import { Draggable } from "react-beautiful-dnd";
import CodeItem from "./CodeItem";

const Draggables = ({ name, code, timeRemaining, index }) => {
  return (
    <Draggable draggableId={String(code)} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='code-item p-4 border rounded-md shadow-md flex justify-between items-center'
        >
          <CodeItem
            name={name}
            code={code}
            timeRemaining={timeRemaining}
            index={index}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Draggables;
