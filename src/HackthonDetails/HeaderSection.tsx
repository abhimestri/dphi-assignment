import { ReactComponent as ClockIcon } from "../assets/icons/clock_icon.svg";
import { ReactComponent as SkillLevel } from "../assets/icons/carbon_skill-level-basic.svg";
import moment from "moment";

interface HeaderSectionProps {
  hackthonDetails: any;
}

const HeaderSection = ({ hackthonDetails }: HeaderSectionProps) => {
  const getTimeStamp = () => {
    if (
      moment()?.isBetween(
        hackthonDetails?.startDate,
        hackthonDetails?.expiryDate
      )
    ) {
      return `started on ${moment(hackthonDetails?.startDate)?.format(
        "Do MMM'YY hh:mm A"
      )}`;
    } else if (moment(hackthonDetails?.startDate) > moment()) {
      return `will start on ${moment(hackthonDetails?.startDate)?.format(
        "Do MMM'YY hh:mm A"
      )}`;
    } else if (moment(hackthonDetails?.expiryDate) < moment()) {
      return `ended on ${moment(hackthonDetails?.expiryDate)?.format(
        "Do MMM'YY hh:mm A"
      )}`;
    }
  };

  return (
    <div className="bg-primarylight py-24 text-white px-10 md:px-32">
      <div>
        <div className="bg-yellow flex items-center gap-x-2 py-[7px] !px-6 w-fit rounded-[5px] !pr-14">
          <ClockIcon />
          <p className="font-semibold text-black text-[14px]">
            {getTimeStamp()} (India Standard Time)
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
