import React from "react";
import Chip from "../Chip/Chip";
import Counter from "../Counter/Counter";
import { Button } from "react-bootstrap";
import { ReactComponent as CheckIcon } from "../../assets/icons/check_icon.svg";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export interface HackthonCardProps {
  id: string;
  imageUrl: string;
  status: "upcoming" | "active" | "past";
  title: string;
  expiryDate: any;
  startDate: any;
}

interface ChipStatusProp {
  color: string;
  title: string;
}

const HackthonCard = ({
  imageUrl,
  status,
  title,
  startDate,
  expiryDate,
  id,
}: HackthonCardProps) => {
  const navigate = useNavigate();

  const getStatus = (title?: ChipStatusProp["title"]) => {
    if (moment()?.isBetween(startDate, expiryDate)) {
      return {
        title: "active",
        color: "success",
      };
    } else if (moment(startDate) > moment()) {
      return {
        title: "upcoming",
        color: "default",
      };
    } else if (moment(expiryDate) < moment()) {
      return {
        title: "past",
        color: "danger",
      };
    } else {
      return {
        title: title,
        color: "default",
      };
    }
  };
  return (
    <div
      className="min-h-[68vh] !rounded-[15px] overflow-hidden cursor-pointer col-span-12 w-fit md:w-full md:col-span-6 lg:col-span-4"
      onClick={() => navigate(`/hackthon-details/${id}`)}
    >
      <img src={imageUrl} alt="" className="h-[26vh] bg-[#ccc] w-full" />
      <div className="bg-white flex justify-center items-center flex-col px-4 pt-4">
        <Chip message={getStatus()?.title} status={getStatus()?.color} />
        <p className="text-center w-[80%] min-h-[8vh] font-bold text-[16px] mt-3 line-clamp-3">
          {title}
        </p>
        <Counter startDate={startDate} expiryDate={expiryDate} />
        <Button className="!flex gap-x-2 items-center py-[12px] px-4 mt-4 mb-4 bg-darkgreen border-0 rounded-[10px] hover:bg-darkgreen">
          <span>
            <CheckIcon />
          </span>
          <p className="text-[14px] font-medium">Participate Now</p>
        </Button>
      </div>
    </div>
  );
};

export default HackthonCard;
