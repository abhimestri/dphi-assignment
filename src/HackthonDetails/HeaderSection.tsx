import { Button } from "react-bootstrap";
import { ReactComponent as ClockIcon } from "../assets/icons/clock_icon.svg";
import { ReactComponent as SkillLevel } from "../assets/icons/carbon_skill-level-basic.svg";

const HeaderSection = () => {
  return (
    <div className="bg-primarylight px-32 py-24 text-white">
      <div>
        <div className="bg-yellow flex items-center gap-x-2 py-[7px] !px-6 w-fit rounded-[5px] !pr-14">
          <ClockIcon />
          <p className="font-semibold text-black text-[14px]">
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </p>
        </div>
        <p className="font-semibold text-[40px] mt-4">
          Data Science Bootcamp - Graded Datathon
        </p>
        <p className="mt-6 text-[16px] font-medium">
          Identify class to which each butterfly belings to
        </p>
        <div className="bg-white !flex gap-x-2 items-center py-8px] px-[20px] mt-4 mb-4 border-0 rounded-[5px]">
          <span>
            <SkillLevel />
          </span>
          <p className="text-[14px] font-medium">Easy</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
