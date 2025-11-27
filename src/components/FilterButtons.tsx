import React from "react";

export const FilterButtons = ({
  setFilter,
  filter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}) => {
  interface FilterButton {
    text: string;
    value: string;
  }
  const filterButtons: FilterButton[] = [
  { text: "All", value: "all" },
  { text: "Active", value: "active" },
  { text: "Completed", value: "completed" },
];

  return (
    <ul className="flex gap-3 items-center">
      {filterButtons.map((button) => (
        <li key={button.text} className="leading-0">
          <button
            className="font-primary font-medium text-gray-600-light hover:text-navy-850 dark:text-gray-600-dark dark:hover:text-purple-100-hover text-sm cursor-pointer leading-none"
            type="button"
            onClick={() => setFilter(button.value)}
            style={
              filter === button.value ? {color: "#3a7bfdff"} : {}
            }
          >
            {button.text}
          </button>
        </li>
      ))}
    </ul>
  );
};
