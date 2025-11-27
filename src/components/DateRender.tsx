import { format } from "date-fns";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";


const DateRender = () => {
  const [time, setTime] = useState<string>(
    format(new Date(), "p")
  );
  const [date] = useState(format(new Date(), "EEE, MMMM do, yyyy"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(format(new Date(), "p"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute top-4 left-4 z-0 text-gray-50 font-primary font-medium flex flex-col gap-0.5">
      <div className="flex gap-x-2 items-center text-xs md:text-sm ">
        <SlCalender />
        {date}
      </div>
      <div className="flex gap-x-2 items-center text-xs md:text-sm">
        <MdOutlineWatchLater />
        {time}
      </div>
    </div>
  );
};

export default DateRender;
