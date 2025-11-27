import React from "react";
import { useTodosStore } from "../store/useTodosStore";
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiFillEdit } from "react-icons/ai";
import { ActionButton } from "./ActionButton";
import { CheckIcon } from "./CheckIcon";
import type { Todo } from "../types/todo";
interface TodoItemProps {
  todo: Todo;
  setCurrentTodo: React.Dispatch<React.SetStateAction<Todo | undefined>>;
  setUpdateTodoInput: React.Dispatch<React.SetStateAction<boolean>>;
}
const TodoItem = ({
  todo,
  setCurrentTodo,
  setUpdateTodoInput,
}: TodoItemProps) => {
  const { deleteTodo, updateTodoStatus } = useTodosStore();

  return (
    <li
      className="w-full min-h-[50px] bg-gray-50 dark:bg-navy-900 border-b border-gray-300 dark:border-gray-600 cursor-grab active:cursor-grabbing"
    >
      <div
        className="w-full min-h-[50px] flex justify-start gap-3.5 items-center"
        style={{
          padding: "0 15px",
        }}
      >
        {/**Todo Complete Button */}
        <button
          className="cursor-pointer"
          type="button"
          onClick={() => {
            if (!todo.id) return;
            //Update local store
            updateTodoStatus(todo.id);
          }}
        >
          {!todo.completed ? (
            <FaRegCircle
              size={18}
              className="text-gray-300-light dark:text-gray-600-dark transition-transform duration-200 ease-in-out transform hover:scale-110"
            />
          ) : (
            <CheckIcon />
          )}
        </button>
        {/**Todo text */}
        <p
          className={`w-full h-full flex items-center grow font-primary dark:text-purple-300-dark text-md whitespace-break-spaces ${
            todo.completed
              ? "line-through text-purple-300-light dark:text-purple-300-dark"
              : "decoration-none text-navy-850 dark:text-gray-600-dark"
          }`}
        >
          {todo.text as string}
        </p>
        {/**Edit and Delete Buttons */}
        <div className="flex items-center gap-2">
          <ActionButton
            Icon={AiFillEdit}
            iconClassName="text-gray-600-light dark:text-gray-600-dark hover:text-green-500"
            funcTrigger={() => {
              setCurrentTodo(todo);
              setUpdateTodoInput((prev) => !prev);
            }}
          />
          <ActionButton
            Icon={RxCross2}
            iconClassName="text-gray-600-light dark:text-gray-600-dark hover:text-red-500"
            funcTrigger={() => {
              if (todo.id) {
                //Delete from local store
                deleteTodo(todo.id);
              }
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
