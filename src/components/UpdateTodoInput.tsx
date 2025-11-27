import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import type { Todo } from "../types/todo";
import { useTodosStore } from "../store/useTodosStore";

export const UpdateTodoInput = ({
  currentTodo,
  setUpdateTodoInput,
}: {
  currentTodo?: Todo;
  setUpdateTodoInput: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { updateTodo } = useTodosStore();
  const [text, setText] = React.useState(currentTodo?.text || "");
  const onClose = () => {
    // Logic to close the update input form
    setUpdateTodoInput(false);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentTodo) {
      updateTodo(currentTodo.id, { ...currentTodo, text });
      setUpdateTodoInput(false);
    }
  };
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 z-9990"></div>

      {/* Centered Form */}
      <form
        onSubmit={onSubmit}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
  w-[90%] max-w-md h-[50px] rounded-sm bg-gray-50 dark:bg-navy-900 shadow z-9999 overflow-hidden"
      >
        <fieldset
          className="w-full h-full flex justify-start gap-3.5 items-center ps-[15px]"
        >
          <FaRegCircle
            size={18}
            className="text-gray-300-light dark:text-gray-600"
          />

          <label htmlFor="todo-input" className="sr-only">
            Todo input
          </label>

          <input
            type="text"
            id="todo-input"
            name="todo-input"
            className="w-full h-full focus:outline-0 grow placeholder:text-gray-600-light caret-blue-600 font-primary placeholder:font-primary dark:text-purple-300-dark text-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </fieldset>

        <button type="submit" className="sr-only">
          Submit
        </button>
        <button
          type="button"
          onClick={onClose}
          className="
          block absolute 
    right-0 top-1/2 -translate-y-1/2
    text-gray-500 dark:text-gray-400
    hover:text-gray-700 dark:hover:text-gray-200
    transition
    cursor-pointer
    bg-gray-50 dark:bg-navy-900
    h-full
  "
        >
          <RxCross2 size={30} />
        </button>
      </form>
    </>
  );
};
