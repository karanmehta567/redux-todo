import React from "react";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { todoDeleted } from "../features/todo/todoSlice";
import { toggleInputForm } from "../features/todo/todoSlice";
function SingleCardtodo(props) {
  const [done, setdone] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="bg-amber-100 p-2 flex justify-between rounded-lg mt-5 py-2 ">
      <div className="px-4">
        <h1 className={done ? "font-semibold line-through" : "font-semibold"}>
          {props.text}
        </h1>
      </div>
      <div className="px-4 flex space-x-3">
        <button
          className="bg-green-100 hover:bg-purple-100 shadow-md py-2 px-4 rounded-lg"
          onClick={() => setdone(!done)}
        >
          <TiTick />
        </button>
        <div className="px-4 flex space-x-3">
          <button className="bg-green-100 hover:bg-purple-100 shadow-md py-2 px-4 rounded-lg">
            <MdDelete onClick={() => dispatch(todoDeleted(props.id))} />
          </button>
        </div>
        <div className="px-4 flex space-x-3">
          <button className="bg-green-100 hover:bg-purple-100 shadow-md py-2 px-4 rounded-lg">
            <MdTipsAndUpdates
              onClick={() =>
                dispatch(toggleInputForm({ id: props.id, text: props.text }))
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCardtodo;
