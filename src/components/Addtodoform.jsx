import React, { useState } from "react";
import { todoAdded } from "../features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
function Addtodoform() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (/^\s*$/.test(input)) {
      alert("Enter a value"); // Alert for empty input
      setInput(""); // Clear input field
      return;
    }
    dispatch(todoAdded({ id: nanoid(), text: input })); // Dispatch action
    setInput(""); // Clear input field after submission
  };
  return (
    <>
      <form className="flex space-x-3" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="shadow appearance-none rounded border w-3/4 ml-2"
          placeholder=" Add todo"
        />
        <button
          type="submit"
          className="bg-green-100 hover:bg-purple-100 shadow-md py-2 px-4 rounded-lg ml-20 w-1/3 "
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Addtodoform;
