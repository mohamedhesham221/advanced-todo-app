import { IoIosCheckmark } from "react-icons/io";

export const CheckIcon = () => {
  return (
    <span className="block cursor-pointer w-[18px] h-[18px] rounded-full bg-linear-to-r from-linear-l to-linear-r transition-transform duration-200 ease-in-out transform hover:scale-110" role="button" tabIndex={0}>
      <IoIosCheckmark size={18} color="#fff" />
    </span>
  );
};
