import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { useTodosStore } from "../store/useTodosStore";
const AddInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { addTodo } = useTodosStore();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create new todo object
    const newTodo = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      text: inputValue,
      completed: false,
    }
    // Add todo to Local State
    addTodo(newTodo);
    // Clear input field after submission
    setTimeout(() => {
      setInputValue("");
    }, 100);
  };
  return (
    <form
      className="w-full h-[50px] rounded-sm bg-gray-50 dark:bg-navy-900 shadow"
      onSubmit={handleSubmit}
    >
      <fieldset
        className="w-full h-full flex justify-start gap-3.5 items-center "
        style={{
          paddingInlineStart: "15px",
        }}
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
          autoComplete="off"
          placeholder="Type a Todo then hit Enter ↵ ..."
          value={inputValue}
          required
          enterKeyHint="enter"
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-full focus:outline-0 grow placeholder:text-gray-600-light caret-blue-600 font-primary placeholder:font-primary dark:text-purple-300-dark text-md"
        />
      </fieldset>
      <button type="submit" className="sr-only">
        Submit
      </button>
    </form>
  );
};

export default AddInput;
