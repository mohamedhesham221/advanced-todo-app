import React from "react";
import { ReactSortable } from "react-sortablejs";
import { useTodosStore } from "../store/useTodosStore";
import { UpdateTodoInput } from "./UpdateTodoInput";
import type { Todo } from "../types/todo";
import { FilterButtons } from "./FilterButtons";
import { ClearCompletedButton } from "./ClearCompletedButton";
import TodoItem from "./TodoItem";

const Todos = () => {
  const { todos, setTodos, getTodosLeft } = useTodosStore();
  const [updateTodoInput, setUpdateTodoInput] = React.useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = React.useState<Todo>();
  const [filter, setFilter] = React.useState<string>("all");
  const filteredTodos = React.useMemo(() => {
    if (filter === "active") {
      return todos.filter((t) => !t.completed);
    }
    if (filter === "completed") {
      return todos.filter((t) => t.completed);
    }
    return todos;
  }, [filter, todos]);
  console.log(filter);

  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      {!todos.length && (
        <p className="text-center text-black dark:text-gray-400 font-primary">
          No Todos Available !!
        </p>
      )}
      {todos && todos.length !== 0 && (
        <ul className="flex flex-col rounded-tr-sm rounded-tl-sm shadow overflow-hidden">
          {/**Todo List */}
          <ReactSortable list={filteredTodos} setList={setTodos}>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                setCurrentTodo={setCurrentTodo}
                setUpdateTodoInput={setUpdateTodoInput}
              />
            ))}
          </ReactSortable>
          {/**Todo List Footer */}
          <li className="w-full h-[50px] bg-gray-50 dark:bg-navy-900 dark:border-gray-600">
            <div
              className="w-full h-full flex justify-between gap-3.5 items-center"
              style={{
                padding: "0 15px",
              }}
            >
              {/**Total Items Left */}
              <p className="font-primary text-gray-600-light dark:text-gray-600-dark text-[9px] md:text-xs lg:text-base leading-0">
                {getTodosLeft()} items left
              </p>
              {/* Filter Buttons */}
              <FilterButtons setFilter={setFilter} filter={filter} />
              {/**Clear Completed Button */}
              <ClearCompletedButton />
            </div>
          </li>
        </ul>
      )}
      {/**Drag and Drop Hint */}
      {todos && todos.length !== 0 && (
        <p
          className="text-center text-gray-600-light dark:text-gray-600-dark text-base font-primary"
          style={{ marginTop: "40px" }}
        >
          Drag and drop to reorder todos
        </p>
      )}

      {/**Update Todo Input */}
      {updateTodoInput && (
        <UpdateTodoInput
          currentTodo={currentTodo}
          setUpdateTodoInput={setUpdateTodoInput}
        />
      )}
    </div>
  );
};

export default Todos;
