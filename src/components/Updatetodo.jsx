import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoUpdate } from "../features/todo/todoSlice";

function Updatetodo() {
  const todotoUpdate = useSelector((state) => state.todo.todoUpdate);
  const [update, setUpdate] = useState(todotoUpdate.text);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(update)) {
      alert("Enter a value");
      setUpdate("");
      return;
    } else {
      dispatch(todoUpdate({ id: todotoUpdate.id, text: update }));
    }
  };
  return (
    <>
      <form className="flex space-x-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="shadow appearance-none border-rounded size-200 ml-2 w-3/4"
          placeholder=" Update todo"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
        />
        <button
          type="submit"
          className="hover:bg-purple-100 shadow-md py-2 px-4 rounded-lg ml-20 bg-orange-400 w-1/3"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Updatetodo;
