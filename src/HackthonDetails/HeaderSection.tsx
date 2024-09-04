import { ReactComponent as ClockIcon } from "../assets/icons/clock_icon.svg";
import { ReactComponent as SkillLevel } from "../assets/icons/carbon_skill-level-basic.svg";
import { dataProps } from "../Data";

interface HeaderSectionProps {
  hackthonDetails: dataProps | any;
}

const HeaderSection = ({ hackthonDetails }: HeaderSectionProps) => {
  return (
    <div className="bg-primarylight py-24 text-white px-10 md:px-32">
      <div>
        <div className="bg-yellow flex items-center gap-x-2 py-[7px] !px-6 w-fit rounded-[5px] !pr-14">
          <ClockIcon />
          <p className="font-semibold text-black text-[14px]">
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </p>
        </div>
        <p className="font-semibold text-[40px] mt-4">
          {hackthonDetails?.title}
        </p>
        <p className="mt-6 text-[16px] font-medium line-clamp-1">
          {hackthonDetails?.description}
        </p>
        <div className="bg-white w-fit text-black capitalize !flex gap-x-2 items-center py-[8px] px-[20px] mt-4 mb-4 border-0 rounded-[5px]">
          <span>
            <SkillLevel />
          </span>
          <p className="text-[14px] font-medium">{hackthonDetails?.level}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
