import React from "react";

interface ActionButtonProps {
  Icon: React.ElementType;
  iconClassName: string;
  funcTrigger?: () => void;
}
export const ActionButton = ({
  Icon,
  iconClassName,
  funcTrigger,
}: ActionButtonProps) => {
  return (
    <button
      className="cursor-pointer"
      type="button"
      onClick={funcTrigger}
    >
      <Icon size={18} className={iconClassName} />
    </button>
  );
};
