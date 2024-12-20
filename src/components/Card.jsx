import React from "react";
import Addtodoform from "./Addtodoform";
import Updatetodo from "./Updatetodo";
import { todoCleared } from "../features/todo/todoSlice";
import SingleCardtodo from "./SingleCardtodo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleInputForm } from "../features/todo/todoSlice";
function Card() {
  const mytodos = useSelector((state) => state.todo.todos);
  console.log(mytodos);
  const toggleForm = useSelector((state) => state.todo.toggleForm);
  const dispatch = useDispatch();
  return (
    <div className="h-3/4 w-1/2 min-h-max bg-orange-50 shadow-2xl rounded-lg p-2 items-center flex flex-col space-y-10 justify-between">
      <div className="flex flex-col space-y-5 w-full h-3/4 min-x-max items-center">
        <h1 className="text-3xl underline font-mono">Todo List</h1>
        <div className="w-3/4">
          {toggleForm ? <Addtodoform /> : <Updatetodo />}
          {/* <div className="mt-5 ">
            <Updatetodo />
          </div> */}
          <div className="w-80%">
            <ul className="max-h-70 overflow-y-scroll">
              {mytodos.map((todo) => (
                <li key={todo.id} className="mb-3">
                  <SingleCardtodo text={todo.text} id={todo.id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => dispatch(todoCleared())}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
