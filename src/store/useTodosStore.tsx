import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Todo } from "../types/todo";

interface StateType {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, updatedTodo: Todo) => void;
  getTodosLeft: () => number;
  clearCompleted: () => void;
  updateTodoStatus: (id: string) => void;
}
export const useTodosStore = create<StateType>()(
  persist(
    (set, get) => ({
      todos: [],
      setTodos: (todos: Todo[]) => set({ todos }),
      addTodo: (todo) => {
        set((state) => ({
          todos: [...state.todos, todo],
        }));
      },
      deleteTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));        
      },
      updateTodo: (id: string, updatedTodo: Todo) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
          ),
        }));
      },
      updateTodoStatus: (id: string) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      getTodosLeft: () => {
        return get().todos.filter((todo) => !todo.completed).length;
      },
      clearCompleted: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        }));
      },
    }),
    {
      name: "todos-storage",
    }
  )
);
