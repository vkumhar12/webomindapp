import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ScheduleButton = () => {
  return (
    <div>
      <Link href="/">
        <button className="bg-red-600 text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-red-400 flex items-center justify-center ">
          <span className="">Schedule Demo</span>
          <span className="mt-1">
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ScheduleButton;
