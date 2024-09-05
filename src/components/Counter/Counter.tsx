import moment from "moment";
import { ReactComponent as ColonIcon } from "../../assets/icons/colon_icon.svg";
import { useEffect, useState } from "react";

interface CounterProps {
  startDate: any;
  expiryDate: any;
}

const Counter = ({ startDate, expiryDate }: CounterProps) => {
  const [duration, setDuration] = useState<any>();
  //   const currentDate = moment();
  const isBetween = moment()?.isBetween(startDate, expiryDate);
  const endDate = moment(new Date(expiryDate));

  useEffect(() => {
    const calculateDuration = () => {
      const currentDate = moment();
      setDuration(moment.duration(endDate.diff(currentDate)));
    };

    // Initial calculation
    calculateDuration();

    // Set interval to update duration every second
    const intervalId = setInterval(calculateDuration, 1000);

    // Cleanup interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [moment()?.minutes()]);

  return (
    <div className="mt-3">
      <p className="text-center">
        {duration?.seconds() < 0
          ? "Ended on"
          : isBetween
          ? "Ends in"
          : "Starts in"}
      </p>
      {+moment.duration(endDate.diff(moment())) < 0 ? (
        <p className="py-[12px] font-semibold text-[18px] text-[#454545]">{`${moment(
          expiryDate
        )?.format("Do MMM'YY hh:mm A")}`}</p>
      ) : (
        <div className="poppins flex gap-x-2 items-start">
          <div>
            <p className="font-semibold text-[18px] text-center">
              {duration?.days()?.toString()?.length === 1
                ? `0${duration?.days()}`
                : duration?.days()}
            </p>
            <p className="mt-2 text-[10px]">Days</p>
          </div>
          <ColonIcon className="mt-2" />
          <div>
            <p className="font-semibold text-[18px] text-center">
              {duration?.hours()?.toString()?.length === 1
                ? `0${duration?.hours()}`
                : duration?.hours()}
            </p>
            <p className="mt-2 text-[10px]">Hours</p>
          </div>
          <ColonIcon className="mt-2" />
          <div>
            <p className="font-semibold text-[18px] text-center">
              {duration?.minutes()?.toString()?.length === 1
                ? `0${duration?.minutes()}`
                : duration?.minutes()}
            </p>
            <p className="mt-2 text-[10px]">Mins</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
