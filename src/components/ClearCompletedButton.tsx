import { useTodosStore } from "../store/useTodosStore";

export const ClearCompletedButton = () => {
  const { clearCompleted } = useTodosStore();
  return (
    <button
      className="font-primary text-gray-600-light hover:text-navy-850 dark:text-gray-600-dark dark:hover:text-purple-100-hover text-[9px] md:text-xs lg:text-base cursor-pointer flex items-center leading-0 "
      type="button"
      onClick={() => clearCompleted()}
    >
      Clear Completed
    </button>
  );
};
